"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateConctatanos = exports.getContactanosByID = exports.getContactanos = exports.deleteContactanos = exports.createNewContactanos = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _express = require("express");

var _database = require("../database");

var getContactanos = /*#__PURE__*/function () {
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
            return pool.request().query(_database.queries.getAllContactanos);

          case 6:
            result = _context.sent;
            res.json(result.recordset);
            _context.next = 14;
            break;

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](0);
            //Error interno del servidor
            res.status(500);
            res.send(_context.t0.message);

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 10]]);
  }));

  return function getContactanos(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getContactanos = getContactanos;

var createNewContactanos = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _req$body, nombre, email, celular, comentario, fecha_registro, pool;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body = req.body, nombre = _req$body.nombre, email = _req$body.email, celular = _req$body.celular, comentario = _req$body.comentario, fecha_registro = _req$body.fecha_registro;

            if (!(nombre == null || email == null || celular == null || comentario == null || fecha_registro == null)) {
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
            return pool.request().input("nombre", _database.sql.VarChar, nombre).input("email", _database.sql.VarChar, email).input("celular", _database.sql.VarChar, celular).input("comentario", _database.sql.Text, comentario).input("fecha_registro", _database.sql.DateTime, fecha_registro).query(_database.queries.addNewContactanos);

          case 9:
            res.json({
              nombre: nombre,
              email: email,
              celular: celular,
              comentario: comentario,
              fecha_registro: fecha_registro
            });
            _context2.next = 16;
            break;

          case 12:
            _context2.prev = 12;
            _context2.t0 = _context2["catch"](3);
            //Error interno del servidor
            res.status(500);
            res.send(_context2.t0.message);

          case 16:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[3, 12]]);
  }));

  return function createNewContactanos(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.createNewContactanos = createNewContactanos;

var getContactanosByID = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var id, pool, result;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id = req.params.id;
            _context3.next = 3;
            return (0, _database.getConnection)();

          case 3:
            pool = _context3.sent;
            _context3.next = 6;
            return pool.request().input("id_contacto", id).query(_database.queries.getContactanosByID);

          case 6:
            result = _context3.sent;
            console.log(result);
            res.send(result.recordset);

          case 9:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getContactanosByID(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}(); //por id


exports.getContactanosByID = getContactanosByID;

var deleteContactanos = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var id, pool, result;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = req.params.id;
            _context4.next = 3;
            return (0, _database.getConnection)();

          case 3:
            pool = _context4.sent;
            _context4.next = 6;
            return pool.request().input("id_contacto", id).query(_database.queries.deleteContactanos);

          case 6:
            result = _context4.sent;
            res.sendStatus(204);

          case 8:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function deleteContactanos(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.deleteContactanos = deleteContactanos;

var updateConctatanos = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var _req$body2, nombre, email, celular, comentario, fecha_registro, id, pool;

    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _req$body2 = req.body, nombre = _req$body2.nombre, email = _req$body2.email, celular = _req$body2.celular, comentario = _req$body2.comentario, fecha_registro = _req$body2.fecha_registro;
            id = req.params.id;

            if (!(nombre == null || email == null || celular == null || comentario == null || fecha_registro == null)) {
              _context5.next = 4;
              break;
            }

            return _context5.abrupt("return", res.status(400).json({
              msg: "Bad Request. Please Fill all Fields"
            }));

          case 4:
            _context5.next = 6;
            return (0, _database.getConnection)();

          case 6:
            pool = _context5.sent;
            _context5.next = 9;
            return pool.request().input("nombre", _database.sql.VarChar, nombre).input("email", _database.sql.VarChar, email).input("celular", _database.sql.VarChar, celular).input("comentario", _database.sql.Text, comentario).input("fecha_registro", _database.sql.DateTime, fecha_registro).input("id_contacto", id).query(_database.queries.updateContactanos);

          case 9:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function updateConctatanos(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.updateConctatanos = updateConctatanos;