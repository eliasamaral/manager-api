import Projeto from "../../../models/Projeto";

export default {
  Query: {
    getProjetos: async () => await Projeto.find(),
    getProjeto: async (_, { projeto }) => {
      try {
        const e = await Projeto.findOne({ projeto });
        if (!e) {
          throw new Error("Projeto não encontrado");
        }
        return e;
      } catch (error) {
        console.error(error);
        throw new Error("Erro ao buscar o projeto");
      }
    },
  },
  Mutation: {
    createProjeto: (_, { data }) => Projeto.create(data),
  },
};
