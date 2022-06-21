"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _contactanos = require("../controllers/contactanos.controller");

var router = (0, _express.Router)();
router.get("/contactanos", _contactanos.getContactanos);
router.post("/contactanos", _contactanos.createNewContactanos); //Este sera para obtener productos por ID

router.get("/contactanos/:id", _contactanos.getContactanosByID);
router["delete"]("/contactanos/:id", _contactanos.deleteContactanos);
router.put("/contactanos/:id", _contactanos.updateConctatanos);
var _default = router;
exports["default"] = _default;