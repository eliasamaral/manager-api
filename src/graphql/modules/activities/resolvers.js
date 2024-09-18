import Activity from '../../../models/Activity'
import mock from '../../../mockData'

require('dotenv').config()

export default {
  Query: {
    activity: async (_, { _id }) => Activity.findById(_id),
    activities: async () => await Activity.find(),
  },

  Mutation: {
    createActivity: async (_, { data }) => 
      Activity.create(process.env.DB_NAME === 'test' ? mock.createActivity : data)
    
    }

  }
