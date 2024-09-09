const mongoose = require("mongoose");

const ClimaSchema = new mongoose.Schema({
	manha: {
		type: String,
		required: true,
	},
	tarde: {
		type: String,
		required: true,
	},
});

const AtividadeSchema = new mongoose.Schema({
	atividade: {
		type: String,
		required: true,
	},
	duracao: {
		type: String,
		required: true,
	},
});

const MaoDeObraSchema = new mongoose.Schema({
	nome: {
		type: String,
		required: true,
	},
	funcao: {
		type: String,
		required: true,
	},
	inicio: {
		type: String,
		required: true,
	},
	fim: {
		type: String,
		required: true,
	},
});

const Schema = new mongoose.Schema(
	{
		projeto: {
			type: String,
			required: true,
		},
		local: {
			type: String,
			required: true,
		},
		encarregado: {
			type: String,
			required: true,
		},
		observacoes: {
			type: String,
		},
		clima: {
			type: ClimaSchema,
			required: true,
		},
		dataDaProducao: {
			type: String,
			required: true,
		},
		atividades: [AtividadeSchema],
		maoDeObra: [MaoDeObraSchema],
	},
	{
		timestamps: true,
	},
);

export default mongoose.model("RDO", Schema);
