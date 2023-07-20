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
  descricao: {
    type: String
  },
  matricula: {
    type: Number
  },
  equipe: {
    type: Number
  }
});
var _default = _mongoose["default"].model("Ferramenta", Schema);
exports["default"] = _default;