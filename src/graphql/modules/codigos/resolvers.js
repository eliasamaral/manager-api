import Codigo from "../../../models/Codigo";

export default {

  Query: {
    codigos: async () => await Codigo.find(),
    codigo: async (_, { code }) => {
      try {
        const codigo = await Codigo.findOne({ code });
        if (!codigo) {
          throw new Error("Código não encontrado");
        }
        return codigo;
      } catch (error) {
        console.error(error);
        throw new Error("Código não encontrado");
      }
    },
    
  },
  Mutation: {
    createCodigo: (_, { data }) => Codigo.create(data),
    updateCodigo: async (_, { id, data }) =>
      await Codigo.findByIdAndUpdate(id, data, { new: true }),
    deleteCodigo: async (_, { id }) => !!(await Codigo.findByIdAndRemove(id)),
  },
};
