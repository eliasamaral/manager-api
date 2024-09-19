import mongoose from 'mongoose'

const Schema = new mongoose.Schema({
  name: {
    type: String,
  },

  hh: {
    type: Number
  }
})

export default mongoose.model('Collaborator', Schema)
