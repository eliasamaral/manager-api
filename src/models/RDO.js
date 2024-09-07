const mongoose = require('mongoose')

//lebrar de tornar required: true

const Schema = new mongoose.Schema({
	projeto: {
		type: Number,
		required: true,
	},

	diagrama: {
		type: Number,
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
	clima: {
		manha: {
			type: String,
			required: true,
		},

		tarde: {
			type: String,
			required: true,
		},
	},

	maoDeObra: {
		encarregado: {
			type: Number,
			required: true,
		},
		motorista: {
			type: Number,
			required: true,
		},
		eletricista: {
			type: Number,
			required: true,
		},
		auxiliar: {
			type: Number,
			required: true,
		},
	},

	observacoes: {
		type: String,
		required: true,
	},
	dataDaProducao: {
		type: String,
		required: true,
	},
	createdAt: {
		type: Date,
		required: true,
		default: Date.now,
	},

	fichaTrafo: {
		estf: { type: String },
		estfsucata: { type: String },
		nSerie: { type: String },
		nSucataSerie: { type: String },
		NA: { type: String },
		NB: { type: String },
		NC: { type: String },
		AB: { type: String },
		AC: { type: String },
		BC: { type: String },
	},

	servicos: [
		{
			codigo: {
				type: Number,
				required: true,
			},
			descricao: {
				type: String,
				required: true,
			},
			quantidade: {
				type: Number,
				required: true,
			},
		},
	],
	isFinal: {
		type: Boolean,
		require: true,
	},
})

export default mongoose.model('RDO', Schema)
