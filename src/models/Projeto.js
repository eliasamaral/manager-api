const mongoose = require('mongoose')

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
  },
  cidade: {
    type: String,
  },

  tipo: {
    type: String,
  },
  status: {
    type: Number,
    default: 0,
  },
  coord: { x: String, y: String },
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
})

export default mongoose.model('Projeto', Schema)
