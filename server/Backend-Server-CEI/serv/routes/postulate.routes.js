"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _postulate = require("../controllers/postulate.controller");

var router = (0, _express.Router)();
router.get("/postulate", _postulate.getPostulate);
router.post("/postulate", _postulate.createNewPostulate); //Este sera para obtener productos por ID

router.get("/contactanos/");
router["delete"]("/contactanos");
router.put("/contactanos");
var _default = router;
exports["default"] = _default;