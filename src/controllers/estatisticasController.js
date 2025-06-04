var estatisticasModel = require("../models/estatisticasModel");

function buscarUltimasEstatisticas(req, res) {

    const limite_linhas = 5;

    var idUsuario = req.params.idUsuario

    estatisticasModel.buscarUltimasEstatisticas(idUsuario, limite_linhas).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function kpiTotalCorridas(req, res) {

    var idUsuario = req.params.idUsuario

    estatisticasModel.kpiTotalCorridas(idUsuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function kpiPaceMedio(req, res) {

    var idUsuario = req.params.idUsuario

    estatisticasModel.kpiPaceMedio(idUsuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function kpiDistanciaTotal(req, res) {

    var idUsuario = req.params.idUsuario

    estatisticasModel.kpiDistanciaTotal(idUsuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    buscarUltimasEstatisticas,
    kpiTotalCorridas,
    kpiPaceMedio,
    kpiDistanciaTotal
}