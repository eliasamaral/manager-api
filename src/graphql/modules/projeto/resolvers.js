import Projeto from "../../../models/Projeto";

export default {
  Query: {
    getProjetos: async () => await Projeto.find(),
    getProjeto: async (_, { projeto }) => {
      try {
        const projeto = await Projeto.findOne(projeto);
        if (!projeto) {
          throw new Error("Projeto não encontrado");
        }
        return projeto;
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
