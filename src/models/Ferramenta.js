import mongoose from 'mongoose'

const Schema = new mongoose.Schema({
	nome: {
		type: String,
		required: true,
	},
	descricao: {
		type: String,
	},
	matricula: {
		type: Number,
	},
	equipe: {
		type: Number,
	},
})

export default mongoose.model('Ferramenta', Schema)
