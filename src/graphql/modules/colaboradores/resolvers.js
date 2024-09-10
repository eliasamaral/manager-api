import Colaborador from '../../../models/Colaborador'

export default {
  Query: {
    colaboradores: async () => await Colaborador.find(),
    colaborador: async (_, { nome }) => {
      try {
        const colaborador = await Colaborador.findOne({ nome })
        if (!colaborador) {
          throw new Error('Colaborador não encontrado')
        }
        return colaborador
      } catch (error) {
        console.error(error)
        throw new Error('Colaborador não encontrado')
      }
    },
  },
  Mutation: {
    createColaborador: (_, { data }) => Colaborador.create(data),
    updateColaborador: async (_, { _id, data }) =>
      await Colaborador.findByIdAndUpdate(_id, data, { new: true }),
    deleteColaborador: async (_, { _id }) =>
      !!(await Colaborador.findByIdAndRemove(_id)),
  },
}
