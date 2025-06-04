var express = require("express");
var router = express.Router();

var estatisticasController = require("../controllers/estatisticasController");

router.get("/ultimas/:idUsuario", function (req, res) {
    estatisticasController.buscarUltimasEstatisticas(req, res);
});

router.get("/kpiTotal/:idUsuario", function (req, res) {
    estatisticasController.kpiTotalCorridas(req, res);
});

router.get("/kpiPaceMedio/:idUsuario", function (req, res) {
    estatisticasController.kpiPaceMedio(req, res);
});

router.get("/kpiDistanciaTotal/:idUsuario", function (req, res) {
    estatisticasController.kpiDistanciaTotal(req, res);
});

module.exports = router;