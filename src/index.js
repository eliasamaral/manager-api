import { ApolloServer } from "apollo-server";
import typeDefs from "./graphql/typeDefs.js";
import resolvers from "./graphql/resolvers.js";
import mongoose from "mongoose";
require("dotenv").config();

mongoose.connect(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.4zesnox.mongodb.net/?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const app = new ApolloServer({ typeDefs, resolvers, cache: "bounded", introspection: true});
app.listen({port: process.env.PORT || 4000}).then(({ url }) => console.log(`API is runnig on ${url}🚀.`));
