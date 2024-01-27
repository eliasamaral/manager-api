import mongoose from "mongoose";

const Schema = new mongoose.Schema({
  numero: {
    type: Number,
    required: true,
  },
  fator: {
    type: Number,
    required: true,
  },
  csd: {
    type: String,
    required: true,
  },


});

export default mongoose.model("Contratos", Schema);
