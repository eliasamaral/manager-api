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

    updateStatus: async (_, { id, status }) => {
      try {
        // Obtenha o projeto atual do banco de dados
        const projetoAtual = await Projeto.findById(id);
    
        if (!projetoAtual) {
          throw new Error("Projeto não encontrado");
        }
    
        // Verifique se o novo status é 1 maior ou 1 menor que o status atual
        if (status !== projetoAtual.status + 1 && status !== projetoAtual.status - 1) {
          throw new Error("A atualização do status só é permitida para o próximo ou anterior valor sequencial.");
        }
    
        // Atualize o status no banco de dados
        const projetoAtualizado = await Projeto.findByIdAndUpdate(id, { status }, { new: true });
    
        if (!projetoAtualizado) {
          throw new Error("Erro ao atualizar o status");
        }
    
        return projetoAtualizado;
      } catch (error) {
        console.error("Erro ao atualizar o status:", error);
        throw new Error("Erro ao atualizar o status");
      }
    },
    
    
  },
};
