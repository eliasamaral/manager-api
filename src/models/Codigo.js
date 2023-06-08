import mongoose from "mongoose";

const Schema = new mongoose.Schema({
  code: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  peso: {
    type: Number,
  },
  fator: {
    type: Number,
  },
  tipo: {
    type: String,
  },
});

export default mongoose.model("Codigo", Schema);
