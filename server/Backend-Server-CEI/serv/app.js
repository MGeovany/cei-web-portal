"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _config = _interopRequireDefault(require("./config"));

var _contactanos = _interopRequireDefault(require("./routes/contactanos.routes"));

//Importar rutas
var app = (0, _express["default"])(); //Settings

app.set("port", _config["default"].port); //middlewares

app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
})); //Rutas

app.use(_contactanos["default"]);
var _default = app;
exports["default"] = _default;