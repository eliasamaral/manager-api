import mongoose from 'mongoose'

const Schema = new mongoose.Schema({
  nome: {
    type: String,
  },
  descricao: {
    type: String,
  },
  valor: {
    type: Number,
  },
})

export default mongoose.model('Activity', Schema)
