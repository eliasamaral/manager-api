import mongoose from 'mongoose'

const Schema = new mongoose.Schema({
  project: {
    type: String,
  },

  location: {
    type: String,
  },

  activities: {
    type: [String],
    default: [],
  },
})

export default mongoose.model('Project', Schema)
