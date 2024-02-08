import User from "../../../models/User";
import { ApolloError } from "apollo-server";
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
      const oldEmail = await User.findOne({ email });

      if (oldEmail) {
        throw new ApolloError(
          `O email ${email} ja existe`,
          "USER_ALREADY_EXIST"
        );
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
        ...res._doc,
      };
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
        throw new ApolloError("Senha incorreta", "INCORRECT_PASSWORD");
      }
    },

    loginFromEmail: async (_, { loginInput: { email } }) => {
      const user = await User.findOne({ email });

      if (user && email === user.email) {
        const token = jwt.sign(
          {
            user_id: user.id,
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
        throw new ApolloError("Email incorreto", "INCORRECT_EMAIL");
      }
    },
  },
};
