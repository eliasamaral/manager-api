import RDO from '../../../models/RDO'

export default {
  Query: {
    getRDOS: async () => await RDO.find(),

    getRDO: async (_, { _id }) => {
      
      
      try {
        const e = await RDO.findOne({ _id })
        if (!e) {
          throw new Error('RDO não encontrado')
        }
        return e
      } catch (error) {
        console.error(error)
        throw new Error('Erro ao buscar o RDO')
      }
    },
  },
  Mutation: {
    createRDO: (_, { data }) => RDO.create(data),
  },
}
