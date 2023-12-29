import mongoose from "mongoose";

const Schema = new mongoose.Schema({
  codigo: {
    type: Number,
    required: true,
    unique : true,
  },
  descricao: {
    type: String,
    required: true,
  },
  umb:{
    type: String,
  },
  preco: {
    type: mongoose.Types.Decimal128,
  },
  tipo: {
    type: String,
  },
  fator: {
    type: Number,
  },
  ativo: {
    default: false,
    type: Boolean,
  },
 
 
});

export default mongoose.model("Codigo", Schema);
