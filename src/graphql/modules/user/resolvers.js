import User from "../../../models/User";
import { ApolloError } from "apollo-server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export default {
  Query: {
    user: async (_, { _id }) => User.findById(_id),
  },

  Mutation: {
    createUser: async (
      _,
      { data: { matricula, email, senha, administrador } }
    ) => {
      const oldMatricula = await User.findOne({ matricula });
      const oldEmail = await User.findOne({ email });

      if (oldMatricula) {
        throw new ApolloError(
          `A matricula ${matricula} ja existe`,
          "USER_ALREADY_EXIST"
        );
      }

      if (oldEmail) {
        throw new ApolloError(
          `O email ${email} ja existe`,
          "USER_ALREADY_EXIST"
        );
      }

      let senhaEncriptada = await bcrypt.hash(senha, 10);

      const newUser = new User({
        matricula: matricula,
        email: email.toLowerCase(),
        senha: senhaEncriptada,
        administrador: administrador,
      });

      const token = jwt.sign(
        {
          user_id: newUser.id,
          email,
        },
        "UNSAFE_STRING",
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
          "UNSAFE_STRING",
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
  },
};
