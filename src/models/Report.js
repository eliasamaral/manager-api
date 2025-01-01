const mongoose = require('mongoose')

const ActivitySchema = new mongoose.Schema({
  id: { type: String },
  duration: { type: String},
  description: { type: String},
})

const CollaboratorSchema = new mongoose.Schema({
  name: { type: String },
  start_time: { type: String },
  end_time: { type: String },
  description: { type: String },
})

const ReportSchema = new mongoose.Schema({
  id: { type: String, required: true },
  project: { type: String, required: true },
  leader: { type: String, required: true },
  report_date: { type: String, required: true },
  morning_weather_condition: { type: String, required: true },
  afternoon_weather_condition: { type: String, required: true },
  observations: { type: String },
  activities: { type: [ActivitySchema] },
  collaborators: { type: [CollaboratorSchema] },
})
export default mongoose.model('Report', ReportSchema)
