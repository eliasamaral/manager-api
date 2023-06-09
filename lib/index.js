"use strict";

var _apolloServer = require("apollo-server");
var _typeDefs = _interopRequireDefault(require("./graphql/typeDefs"));
var _resolvers = _interopRequireDefault(require("./graphql/resolvers"));
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
require("dotenv").config();
_mongoose["default"].connect("mongodb+srv://".concat(process.env.DB_USER, ":").concat(process.env.DB_PASSWORD, "@cluster0.4zesnox.mongodb.net/?retryWrites=true&w=majority"), {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
var app = new _apolloServer.ApolloServer({
  typeDefs: _typeDefs["default"],
  resolvers: _resolvers["default"]
});
app.listen({
  port: process.env.PORT || 4000
}).then(function (_ref) {
  var url = _ref.url;
  return console.log("Server is runnig on ".concat(url, "\uD83D\uDE80."));
});