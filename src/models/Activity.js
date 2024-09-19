import mongoose from 'mongoose'

const Schema = new mongoose.Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
  },
})

export default mongoose.model('Activity', Schema)
