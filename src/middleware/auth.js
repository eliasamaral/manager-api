const { AuthenticationError } = require("apollo-server");

const jwt = require("jsonwebtoken");

module.exports = (context) => {
  const authHeader = context.req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split("Bearer ")[1];
    if (token) {
      try {
        const user = jwt.verify(token, "UNSAFE_STRING");
        return user;
      } catch (err) {
        throw new AuthenticationError("Token invalido;expirado");
      }
    }
    throw new Error("Authentication token must be 'Bearer [token]");
  }
  throw new Error("Authentication header must be provided");
};
