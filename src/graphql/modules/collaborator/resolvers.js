import Collaborator from '../../../models/Collaborator'



export default {
  Query: {
    collaborator: async (_, { _id }) => {
      try {
        return await Collaborator.findById(_id)
      } catch (error) {
        console.error('Error fetching collaborator:', error)
        throw new Error('Failed to fetch collaborator')
      }
    },
    collaborators: async () => {
      try {
        return await Collaborator.find()
      } catch (error) {
        console.error('Error fetching collaborators:', error)
        throw new Error('Failed to fetch collaborators')
      }
    },
  },

  Mutation: {
    createCollaborator: async (_, { data }) => {
      try {
        const collaboratorData =  data
        return await Collaborator.create(collaboratorData)
      } catch (error) {
        console.error('Error creating collaborator:', error)
        throw new Error('Failed to create collaborator')
      }
    },

    updateCollaborator: async (_, { _id, data }) => {
      try {
        const updatedCollaborator = await Collaborator.findByIdAndUpdate(
          _id,
          { $set: data },
          { new: true, runValidators: true }
        )

        if (!updatedCollaborator) {
          throw new Error('Collaborator not found')
        }

        return updatedCollaborator
      } catch (error) {
        console.error('Error updating collaborator:', error)
        throw new Error('Failed to update collaborator')
      }
    },

    deleteCollaborator: async (_, { _id }) => {
      try {
        const deletedCollaborator = await Collaborator.findByIdAndDelete(_id)

        if (!deletedCollaborator) {
          throw new Error('Collaborator not found')
        }

        return true
      } catch (error) {
        console.error('Error deleting collaborator:', error)
        throw new Error('Failed to delete collaborator')
      }
    },
  },
}
