import Codigo from '../../../models/Codigo'

export default {
  Query: {
    codigos: async () => {
      try {
        return await Codigo.find()
      } catch (error) {
        console.error('Erro ao buscar códigos:', error)
        throw new Error('Erro ao buscar os códigos')
      }
    },

    codigo: async (_, { code }) => {
      try {
        const foundCodigo = await Codigo.findOne({ code })
        if (!foundCodigo) {
          throw new Error('Código não encontrado para o código fornecido')
        }
        return foundCodigo
      } catch (error) {
        console.error('Erro ao buscar o código:', error)
        throw new Error('Erro ao buscar o código')
      }
    },

    codigoByDescription: async (_, { description }) => {
      try {
        const foundCodigo = await Codigo.findOne({ description })
        if (!foundCodigo) {
          throw new Error('Código não encontrado para a descrição fornecida.')
        }
        return foundCodigo
      } catch (error) {
        console.error('Erro ao buscar o código por descrição:', error)
        throw new Error('Erro ao buscar o código por descrição.')
      }
    },

    codigoByType: async (_, { tipo }) => {
      try {
        const foundCodigo = await Codigo.find({ tipo })
        if (!foundCodigo) {
          throw new Error('Código não encontrado para o tipo fornecido.')
        }
        return foundCodigo
      } catch (error) {
        console.error('Erro ao buscar o código por tipo:', error)
        throw new Error('Erro ao buscar o código por tipo.')
      }
    },
  },
  Mutation: {
    createCodigo: (_, { data }) => {
      try {
        return Codigo.create(data)
      } catch (error) {
        console.error('Erro ao criar o código:', error)
        throw new Error('Erro ao criar o código')
      }
    },

    updateCodigo: async (_, { _id, data }) => {
      try {
        return await Codigo.findByIdAndUpdate(_id, data, { new: true })
      } catch (error) {
        console.error('Erro ao atualizar o código:', error)
        throw new Error('Erro ao atualizar o código')
      }
    },

    deleteCodigo: async (_, { _id }) => {
      try {
        const deletedCodigo = await Codigo.findByIdAndRemove(_id)
        return !!deletedCodigo
      } catch (error) {
        console.error('Erro ao excluir o código:', error)
        throw new Error('Erro ao excluir o código')
      }
    },
  },
}
