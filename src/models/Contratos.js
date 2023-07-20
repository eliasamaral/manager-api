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
  abrangencia: {
    type: Array,
  },
});

export default mongoose.model("Contratos", Schema);
