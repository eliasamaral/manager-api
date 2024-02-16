import Projeto from "../../../models/Projeto";
import { ApolloError } from "apollo-server";

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
    createProjeto: async (_, { projetoInput }) => {
      try {
        const novoProjeto = await Projeto.create(projetoInput);
        return novoProjeto;
      } catch (error) {
        console.error("Erro ao criar o projeto:", error);
        throw new ApolloError(
          "Erro ao criar o projeto. Por favor, tente novamente mais tarde."
        );
      }
    },

    updateProjeto: async (_, { id, data }) => {
      try {
        const projetoAtualizado = await Projeto.findByIdAndUpdate(id, data, {
          new: true,
        });
        if (!projetoAtualizado) {
          throw new ApolloError("Projeto não encontrado para atualização.");
        }
        return true;
      } catch (error) {
        console.error("Erro ao atualizar o projeto:", error);
        throw new ApolloError(
          "Erro ao atualizar o projeto. Verifique os dados e tente novamente."
        );
      }
    },

    deleteProjeto: async (_, { id }) => {
      try {
        const deletedProjeto = await Projeto.findByIdAndRemove(id);
        if (!deletedProjeto) {
          throw new ApolloError("Projeto não encontrado para exclusão.");
        }
        return true;
      } catch (error) {
        console.error("Erro ao excluir o projeto:", error);
        throw new ApolloError(
          "Erro ao excluir o projeto. Verifique os dados e tente novamente."
        );
      }
    },

    updateStatus: async (_, { id, status }) => {
      try {
        const projetoAtual = await Projeto.findById(id);
        if (!projetoAtual) {
          throw new ApolloError("Projeto não encontrado.");
        }

        if (
          status !== projetoAtual.status + 1 &&
          status !== projetoAtual.status - 1
        ) {
          throw new ApolloError(
            "A atualização do status só é permitida para o próximo ou anterior valor sequencial."
          );
        }

        const projetoAtualizado = await Projeto.findByIdAndUpdate(
          id,
          { status },
          { new: true }
        );

        if (!projetoAtualizado) {
          throw new ApolloError("Erro ao atualizar o status do projeto.");
        }

        return projetoAtualizado;
      } catch (error) {
        console.error("Erro ao atualizar o status:", error);
        throw new ApolloError(
          "Erro ao atualizar o status do projeto. Verifique os dados e tente novamente."
        );
      }
    },
  },
};
