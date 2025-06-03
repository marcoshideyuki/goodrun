var express = require("express");
var router = express.Router();

var corridasController = require("../controllers/corridasController").default;

router.get("/:fk_usuario", function (req, res) {
  corridasController.buscarCorridasPorUsuario(req, res);
});

module.exports = router;