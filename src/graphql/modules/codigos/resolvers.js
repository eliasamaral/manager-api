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
        throw new Error("Código não encontrado");
      }
    },

    codigoByDescription: async (parent, { description }, context, info) => {
      try {
        const a = await Codigo.findOne({ description });
        if (!a) {
          throw new Error("Descrição não encontrada");
        }
        return a;
      } catch (error) {
        throw new Error(error);
      }
    },

    codigoByType: async (parent, { type }, context, info) => {
      try {
        const a = await Codigo.find({ type });
        if (!a) {
          throw new Error("Tipo não encontrada");
        }
        return a;
      } catch (error) {
        throw new Error(error);
      }
    },
  },
  Mutation: {
    createCodigo: (_, { data }) => Codigo.create(data),
    updateCodigo: async (_, { _id, data }) =>
      await Codigo.findByIdAndUpdate(_id, data, { new: true }),
    deleteCodigo: async (_, { _id }) => !!(await Codigo.findByIdAndRemove(_id)),
  },
};
