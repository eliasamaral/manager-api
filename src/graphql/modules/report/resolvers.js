import Report from '../../../models/Report'

export default {
  Query: {
    getReports: async () => await Report.find(),

    getReport: async (_, { _id }) => {
      try {
        const report = await Report.findOne({ _id })
        if (!report) {
          throw new Error('relatorio não encontrado')
        }
        return report
      } catch (error) {
        console.error(error)
        throw new Error('Erro ao buscar o relatorio')
      }
    },
  },
  Mutation: {
    createReport: (_, { data }) => Report.create(data),
  },
}
