"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Schema = new _mongoose["default"].Schema({
  nome: {
    type: String,
    required: true
  },
  funcao: {
    type: String,
    required: true
  },
  matricula: {
    type: Number,
    required: true
  },
  equipe: {
    type: Number
  }
});
var _default = _mongoose["default"].model("Colaborador", Schema);
exports["default"] = _default;