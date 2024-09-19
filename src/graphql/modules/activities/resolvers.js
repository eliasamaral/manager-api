import Activity from '../../../models/Activity'


export default {
  Query: {
    activity: async (_, { _id }) => {
      try {
        return await Activity.findById(_id)
      } catch (error) {
        console.error('Error fetching activity:', error)
        throw new Error('Failed to fetch activity')
      }
    },
    activities: async () => {
      try {
        return await Activity.find()
      } catch (error) {
        console.error('Error fetching activities:', error)
        throw new Error('Failed to fetch activities')
      }
    },
  },

  Mutation: {
    createActivity: async (_, { data }) => {
      try {
        const activityData = data
        return await Activity.create(activityData)
      } catch (error) {
        console.error('Error creating activity:', error)
        throw new Error('Failed to create activity')
      }
    },

    updateActivity: async (_, { _id, data }) => {
      try {
        const updatedActivity = await Activity.findByIdAndUpdate(
          _id,
          { $set: data },
          { new: true, runValidators: true }
        )

        if (!updatedActivity) {
          throw new Error('Activity not found')
        }

        return updatedActivity
      } catch (error) {
        console.error('Error updating activity:', error)
        throw new Error('Failed to update activity')
      }
    },

    deleteActivity: async (_, { _id }) => {
      try {
        const deletedActivity = await Activity.findByIdAndDelete(_id)

        if (!deletedActivity) {
          throw new Error('Activity not found')
        }

        return true
      } catch (error) {
        console.error('Error deleting activity:', error)
        throw new Error('Failed to delete activity')
      }
    },
  },
}
