import mongoose from "mongoose";

const Schema = new mongoose.Schema({
  matricula: {
    type: Number,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    unique: true,
  },
  senha: {
    type: String,
    required: true,
  },
  administrador: {
    type: Boolean,
    default: false,
  },
  token: {
    type: String,
  }
  
});

export default mongoose.model("User", Schema);
