import mongoose from 'mongoose'

const ActivitiesSchema = new mongoose.Schema({
  activity: {
    type: String,
  },
  price: {
    type: Number,
  },
})

const Schema = new mongoose.Schema({
  project: {
    type: String,
  },

  location: {
    type: String,
  },

  activities: [ActivitiesSchema],
})

export default mongoose.model('Project', Schema)
