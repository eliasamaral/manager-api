import Contratos from "../../../models/Contratos";

export default {

  Query: {
    contratos: async () => await Contratos.find(),
    contrato: async (_, { numero }) => {
      try {
        const contrato = await Contratos.findOne({ numero });
        if (!contrato) {
          throw new Error("Contrato não encontrado");
        }
        return contrato;
      } catch (error) {
        console.error(error);
        throw new Error("Contrato não encontrado");
      }
    },
    
  },
  Mutation: {
    createContrato: (_, { data }) => Contratos.create(data),
    updateContrato: async (_, { id, data }) =>
      await Contratos.findByIdAndUpdate(id, data, { new: true }),
    deleteContrato: async (_, { id }) => !!(await Contratos.findByIdAndRemove(id)),
  },
};
