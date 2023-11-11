import Projeto from "../../../models/Projeto";

export default {
  Query: {
    getProjetos: async () => {
      try {
        return await Projeto.find();
      } catch (error) {
        console.error("Erro ao buscar projetos:", error);
        throw new Error("Erro ao buscar os projetos");
      }
    },
    getProjeto: async (_, { projeto }) => {
      try {
        const foundProjeto = await Projeto.findOne({ projeto });
        if (!foundProjeto) {
          throw new Error("Projeto não encontrado");
        }
        return foundProjeto;
      } catch (error) {
        console.error("Erro ao buscar o projeto:", error);
        throw new Error("Erro ao buscar o projeto");
      }
    },
  },
  Mutation: {
    createProjeto: async (_, { data }) => {
      try {
        return await Projeto.create(data);
      } catch (error) {
        console.error("Erro ao criar o projeto:", error);
        throw new Error("Erro ao criar o projeto");
      }
    },
    updateProjeto: async (_, { id, data }) => {
      try {
        return await Projeto.findByIdAndUpdate(id, data, { new: true });
      } catch (error) {
        console.error("Erro ao atualizar o projeto:", error);
        throw new Error("Erro ao atualizar o projeto");
      }
    },
    deleteProjeto: async (_, { id }) => {
      try {
        const deletedProjeto = await Projeto.findByIdAndRemove(id);
        return !!deletedProjeto;
      } catch (error) {
        console.error("Erro ao excluir o projeto:", error);
        throw new Error("Erro ao excluir o projeto");
      }
    },
  },
};
