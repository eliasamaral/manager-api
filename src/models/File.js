import mongoose from 'mongoose'

const Schema = new mongoose.Schema(
  {
    reportId: {
      type: String,
    },

    url: {
      type: String,
    },

    description: {
      type: String,
    },
    name: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
)

export default mongoose.model('File', Schema)
