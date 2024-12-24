import mongoose from 'mongoose'

const Schema = new mongoose.Schema({
    activityId: {
        type: String,
  },
    url: {
        type: String,
  },
})

export default mongoose.model('File', Schema)
