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
  contrato: {
    type: Number,
    required: true,
  },
  local: {
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
  coord: {
    x: String,
    y: String,
  },
  RDODigital: [
    {
      codigo: {
        type: Number,
      },
      descricao: {
        type: String,
      },
      planejado: {
        type: Number,
      },
    },
  ],
  pontos: [
    {
      tipo: {
        type: String,
      },
      status: {
        type: String,
      },
      ref: {
        type: Number,
      },
      material: [
        {
          codigo: {
            type: Number,
          },
          descricao: {
            type: String,
          },
          qnt: {
            type: Number,
          },
        },
      ],
      srv: [
        {
          codigo: {
            type: Number,
          },
          descricao: {
            type: String,
          },
          qntOrcada: {
            type: Number,
          },
          qntExecutada: {
            type: Number,
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
            default: Date.now,
          },
        },
      ],
    },
  ],
});

export default mongoose.model("Projeto", Schema);
