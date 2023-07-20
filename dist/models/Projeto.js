"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var mongoose = require("mongoose");
var Schema = new mongoose.Schema({
  projeto: {
    type: Number,
    required: true
  },
  diagrama: {
    type: Number,
    required: true
  },
  contrato: {
    type: Number,
    required: true
  },
  local: {
    type: String,
    required: true
  },
  cidade: {
    type: String,
    required: true
  },
  csd: {
    type: String
  },
  fiscal: {
    type: String
  },
  tipo: {
    type: String
  },
  RDODigital: [{
    codigo: {
      type: Number
    },
    descricao: {
      type: String
    },
    planejado: {
      type: Number
    }
  }],
  pontos: [{
    tipo: {
      type: String
    },
    status: {
      type: String
    },
    ref: {
      type: Number
    },
    material: [{
      codigo: {
        type: Number
      },
      descricao: {
        type: String
      },
      qnt: {
        type: Number
      }
    }],
    srv: [{
      codigo: {
        type: Number
      },
      descricao: {
        type: String
      },
      qntOrcada: {
        type: Number
      },
      qntExecutada: {
        type: Number
      }
    }],
    pendencias: [{
      descricao: {
        type: String
      },
      createdAt: {
        type: Date,
        "default": Date.now
      }
    }]
  }]
});
var _default = mongoose.model("Projeto", Schema);
exports["default"] = _default;