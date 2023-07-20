const mongoose = require("mongoose");

//lebrar de tornar required: true

const Schema = new mongoose.Schema({
  projeto: {
    type: Number,
  },

  diagrama: {
    type: Number,
  },

  local: {
    type: String,
  },
  encarregado: {
    type: String,
  },
  climaManha: {
    type: String,
  },
  climaTarde: {
    type: String,
  },
  encarregadoQuantidade: {
    type: Number,
  },
  motoristaQuantidade: {
    type: Number,
  },
  eletricistaQuantidade: {
    type: Number,
  },
  auxiliarQuantidade: {
    type: Number,
  },
  observacoes: {
    type: String,
  },
  dataDaProducao: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  servicos: [
    {
      codigo: {
        type: Number,
      },
      descricao: {
        type: String,
      },
      quantidade: {
        type: Number,
      },
    },
  ],
});

export default mongoose.model("RDO", Schema);
