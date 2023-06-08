import Ferramenta from "../../../models/Ferramenta";

export default {
  Query: {
    ferramentas: async () => await Ferramenta.find(),
    ferramenta: async (_, { matricula }) => {
      try {
        const ferramenta = await Ferramenta.findOne({ matricula });
        if (!ferramenta) {
          throw new Error("Ferramenta não encontrada");
        }
        return ferramenta;
      } catch (error) {
        console.error(error);
        throw new Error("Ferramenta não encontrada");
      }
    },
  },
  Mutation: {
    createFerramenta: (_, { data }) => Ferramenta.create(data),
    updateFerramenta: async (_, { _id, data }) =>
      await Ferramenta.findByIdAndUpdate(_id, data, { new: true }),
    deleteFerramenta: async (_, { _id }) =>
      !!(await Ferramenta.findByIdAndRemove(_id)),
  },
};
