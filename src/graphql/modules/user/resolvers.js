import User from "../../../models/User";
import { GraphQLError } from "graphql";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

require("dotenv").config();

export default {
  Query: {
    user: async (_, { _id }) => User.findById(_id),
    users: async () => await User.find(),
  },

  Mutation: {
    createUser: async (_, { data: { email, senha, name } }) => {
      try {
        const existingUser = await User.findOne({ email });

        if (existingUser) {
          throw new Error("Email já está em uso");
        }

        let senhaEncriptada = await bcrypt.hash(senha, 10);

        const newUser = new User({
          email: email.trim().toLowerCase(),
          senha: senhaEncriptada,
          name: name,
        });

        const token = jwt.sign(
          {
            user_id: newUser.id,
            email,
          },
          `${process.env.JWT_SECRET}`,
          { expiresIn: "2h" }
        );

        newUser.token = token;

        const res = await newUser.save();

        return {
          id: res.id,
          email: res.email,
          name: res.name,
          token: res.token,
        };
      } catch (error) {
        throw new GraphQLError("Erro ao criar a conta.", {
          extensions: { code: "500" },
        });
      }
    },

    loginUser: async (_, { loginInput: { matricula, senha } }) => {
      const user = await User.findOne({ matricula });

      if (user && (await bcrypt.compare(senha, user.senha))) {
        const token = jwt.sign(
          {
            user_id: user.id,
            matricula,
          },
          `${process.env.JWT_SECRET}`,
          { expiresIn: "2h" }
        );

        user.token = token;

        return {
          id: user.id,
          ...user._doc,
        };
      } else {
        throw new GraphQLError("Senha ou usuario incorretos.", {
          extensions: { code: "401" },
        });
      }
    },

    loginFromEmail: async (_, { loginInput: { email } }) => {
      const user = await User.findOne({ email });

      if (user && email === user.email) {
        const token = jwt.sign(
          {
            user_id: user.id,
          },
          `${process.env.VITE_JWT_SECRET}`,
          { expiresIn: "2h" }
        );

        user.token = token;

        return {
          id: user.id,
          ...user._doc,
        };
      } else {
        throw new GraphQLError("Senha ou usuario incorretos.", {
          extensions: { code: "401" },
        });
      }
    },

    updateUser: async (_, { _id, data }) => {
      const userWithSameEmail = await User.findOne({ email: data.email });
      if (userWithSameEmail && userWithSameEmail._id.toString() !== _id) {
        throw new GraphQLError(
          `O email ${data.email} já está sendo usado por outro usuário.`,
          {
            extensions: { code: "409" },
          }
        );
      }

      const updatedUser = await User.findByIdAndUpdate(_id, data, {
        new: true,
      });

      return updatedUser;
    },

    deleteUser: async (_, { _id }) => !!(await User.findByIdAndRemove(_id)),
  },
};
