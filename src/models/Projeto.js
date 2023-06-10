const mongoose = require("mongoose");

const Schema = new mongoose.Schema({

  projeto: {
    type: Number,
    required: true,
  },
  diagrama: {
    type: Number,
    required: true,
  },
  apelido: {
    type: String,
    required: true,
  },
  cidade: {
    type: String,
    required: true,
  },
  csd: {
    type: String,
  },
  fiscal: {
    type: String,
  },
  tipo: {
    type: String,
  },
  pontos: [
    {
      tipo: {
        type: String,
        required: true,
      },
      status: {
        type: String,
        required: true,
      },
      ref: {
        type: Number,
        required: true,
      },


      material: [
        {
          codigo: {
            type: Number,
            required: true,
          },
          descricao: {
            type: String,
            required: true,
          },
          qnt: {
            type: Number,
            required: true,
          },
        },
      ],
      srv: [
        {
          codigo: {
            type: Number,
            required: true,
          },
          descricao: {
            type: String,
            required: true,
          },
          qntOrcada: {
            type: Number,
            required: true,
          },
          qntExecutada: {
            type: Number,
            required: true,
          },
        },
      ],
      pendencias: [
        {
          descricao: {
            type: String,
          },
          createdAt: {
            type: Date,
            default: Date.now
          }
        },
      ],
    },
  ],
});

export default mongoose.model("Projeto", Schema);
