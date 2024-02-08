import mongoose from "mongoose";

const Schema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
  },
  senha: {
    type: String,
  },

  token: {
    type: String,
  },
  name: {
    type: String,
  },
});

export default mongoose.model("User", Schema);
