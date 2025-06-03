var express = require("express");
var router = express.Router();

var estatisticasController = require("../controllers/estatisticasController");

router.get("/ultimas/:idUsuario", function (req, res) {
    estatisticasController.buscarUltimasEstatisticas(req, res);
});

module.exports = router;