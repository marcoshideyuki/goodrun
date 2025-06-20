var corridaModel = require("../models/corridasModel")

function buscarCorridasPorUsuario(req, res) {
  var fk_usuario = req.params.idUsuario;

  corridaModel.buscarCorridasPorUsuario(fk_usuario).then((resultado) => {
    if (resultado.length > 0) {
      res.status(200).json(resultado);
    } else {
      res.status(204).json([]);
    }
  }).catch(function (erro) {
    console.log(erro);
    console.log("Houve um erro ao buscar os aquarios: ", erro.sqlMessage);
    res.status(500).json(erro.sqlMessage);
  });
}

module.exports = {
  buscarCorridasPorUsuario
}