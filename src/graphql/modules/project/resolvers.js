import Project from '../../../models/Project'

export default {
  Query: {
    project: async (_, { _id }) => {
      try {
        return await Project.findById(_id)
      } catch (error) {
        console.error('Error fetching project:', error)
        throw new Error('Failed to fetch project')
      }
    },
    projects: async () => {
      try {
        return await Project.find()
      } catch (error) {
        console.error('Error fetching projects:', error)
        throw new Error('Failed to fetch projects')
      }
    },
  },

  Mutation: {
    createProject: async (_, { data }) => {
      try {
        const projectData = data
        return await Project.create(projectData)
      } catch (error) {
        console.error('Error creating project:', error)
        throw new Error('Failed to create project')
      }
    },

    updateProject: async (_, { _id, data }) => {
      try {
        const updatedProject = await Project.findByIdAndUpdate(
          _id,
          { $set: data },
          { new: true, runValidators: true }
        )

        if (!updatedProject) {
          throw new Error('Project not found')
        }

        return updatedProject
      } catch (error) {
        console.error('Error updating project:', error)
        throw new Error('Failed to update project')
      }
    },

    deleteProject: async (_, { _id }) => {
      try {
        const deletedProject = await Project.findByIdAndDelete(_id)

        if (!deletedProject) {
          throw new Error('Project not found')
        }

        return true
      } catch (error) {
        console.error('Error deleting project:', error)
        throw new Error('Failed to delete project')
      }
    },
  },
}
