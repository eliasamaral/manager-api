"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Schema = new _mongoose["default"].Schema({
  numero: {
    type: Number,
    required: true
  },
  fator: {
    type: Number,
    required: true
  },
  abrangencia: {
    type: Array
  }
});
var _default = _mongoose["default"].model("Contratos", Schema);
exports["default"] = _default;