import mongoose from 'mongoose'

const Schema = new mongoose.Schema({
	nome: {
		type: String,
		required: true,
	},
	funcao: {
		type: String,
		required: true,
	},
	matricula: {
		type: Number,
		required: true,
	},
	equipe: {
		type: Number,
	},
})

export default mongoose.model('Colaborador', Schema)
