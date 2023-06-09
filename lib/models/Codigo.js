"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Schema = new _mongoose["default"].Schema({
  code: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  peso: {
    type: Number
  },
  fator: {
    type: Number
  },
  tipo: {
    type: String
  }
});
var _default = _mongoose["default"].model("Codigo", Schema);
exports["default"] = _default;