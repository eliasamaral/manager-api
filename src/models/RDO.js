const mongoose = require('mongoose')

const ClimaSchema = new mongoose.Schema({
  manha: {
    type: String,
    required: true,
  },
  tarde: {
    type: String,
    required: true,
  },
})

const AtividadeSchema = new mongoose.Schema({
  atividade: {
    type: String,
  },
  duracao: {
    type: String,
  },
  executante: {
    type: String,
  },
  valor: {
    type: Number
  }
})

const MaoDeObraSchema = new mongoose.Schema({
  nome: {
    type: String,
  },
  funcao: {
    type: String,
  },
  inicio: {
    type: String,
  },
  fim: {
    type: String,
  },
})

const FerramentaShema = new mongoose.Schema({
  nome: {
    type: String,
  },
  quantidade: {
    type: Number,
  },
  solicitante: {
    type: String,
  },

  ferramentaDevolvida: {
    type: Boolean,
  },
})

const Schema = new mongoose.Schema(
  {
    projeto: {
      type: String,
      required: true,
    },
    local: {
      type: String,
      required: true,
    },
    encarregado: {
      type: String,
      required: true,
    },
    observacoes: {
      type: String,
    },
    clima: {
      type: ClimaSchema,
      required: true,
    },
    dataDaProducao: {
      type: String,
      required: true,
    },
    atividades: [AtividadeSchema],
    maoDeObra: [MaoDeObraSchema],
    ferramentaDevolvida: [FerramentaShema]
  },
  {
    timestamps: true,
  }
)

export default mongoose.model('RDO', Schema)
