"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPostulate = exports.createNewPostulate = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _database = require("../database");

var getPostulate = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var pool, result;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return (0, _database.getConnection)();

          case 3:
            pool = _context.sent;
            _context.next = 6;
            return pool.request().query(_database.queries.getAllPostulate);

          case 6:
            result = _context.sent;
            res.json(result.recordset);
            _context.next = 14;
            break;

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](0);
            res.status(500);
            res.send(_context.t0.message);

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 10]]);
  }));

  return function getPostulate(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getPostulate = getPostulate;

var createNewPostulate = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _req$body, nombre, email, ncuenta, celular, genero, etapa_idea, nombre_idea, equipo_trabajo, sede, id_facultad, rubro, idea_comentario, pre_incubacion, redes_sociales, enlace_redes, firma, pool;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body = req.body, nombre = _req$body.nombre, email = _req$body.email, ncuenta = _req$body.ncuenta, celular = _req$body.celular, genero = _req$body.genero, etapa_idea = _req$body.etapa_idea, nombre_idea = _req$body.nombre_idea, equipo_trabajo = _req$body.equipo_trabajo, sede = _req$body.sede, id_facultad = _req$body.id_facultad, rubro = _req$body.rubro, idea_comentario = _req$body.idea_comentario, pre_incubacion = _req$body.pre_incubacion, redes_sociales = _req$body.redes_sociales, enlace_redes = _req$body.enlace_redes, firma = _req$body.firma;

            if (!(nombre == null || email == null || ncuenta == null || celular == null || genero == null || etapa_idea == null || nombre_idea == null || equipo_trabajo == null || sede == null || rubro == null || idea_comentario == null || pre_incubacion == null || redes_sociales == null || enlace_redes == null || firma == null)) {
              _context2.next = 3;
              break;
            }

            return _context2.abrupt("return", res.status(400).json({
              msg: "Bad Request. Please Fill all Fields"
            }));

          case 3:
            _context2.prev = 3;
            _context2.next = 6;
            return (0, _database.getConnection)();

          case 6:
            pool = _context2.sent;
            _context2.next = 9;
            return pool.request().input("nombre", _database.sql.VarChar, nombre).input("email", _database.sql.VarChar, email).input("ncuenta", _database.sql.Int, ncuenta).input("nombre", _database.sql.VarChar, nombre).input("celular", _database.sql.VarChar, celular).input("genero", _database.sql.VarChar, genero).input("etapa_idea", _database.sql.VarChar, etapa_idea).input("nombre_idea", _database.sql.VarChar, nombre_idea).input("equipo_trabajo", _database.sql.Char, equipo_trabajo).input("sede", _database.sql.VarChar, sede).input("rubro", _database.sql.VarChar, rubro).input("idea_comentario", _database.sql.Text, idea_comentario).input("pre_incubacion", _database.sql.VarChar, pre_incubacion).input("redes_sociales", _database.sql.VarChar, redes_sociales).input("enlace_redes", _database.sql.VarChar, enlace_redes).input("firma", _database.sql.Char, firma).query(_database.queries.addNewPostulate);

          case 9:
            res.json({
              nombre: nombre,
              email: email,
              ncuenta: ncuenta,
              celular: celular,
              genero: genero,
              etapa_idea: etapa_idea,
              nombre_idea: nombre_idea,
              equipo_trabajo: equipo_trabajo,
              sede: sede,
              id_facultad: id_facultad,
              rubro: rubro,
              idea_comentario: idea_comentario,
              pre_incubacion: pre_incubacion,
              redes_sociales: redes_sociales,
              enlace_redes: enlace_redes,
              firma: firma
            });
            _context2.next = 16;
            break;

          case 12:
            _context2.prev = 12;
            _context2.t0 = _context2["catch"](3);
            res.status(500);
            res.send(_context2.t0.message);

          case 16:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[3, 12]]);
  }));

  return function createNewPostulate(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.createNewPostulate = createNewPostulate;