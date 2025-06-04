var database = require("../database/config");

function buscarCorridasPorUsuario(fk_usuario) {

  var instrucaoSql = `SELECT * FROM Publicacao WHERE fk_usuario = ${fk_usuario}`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

module.exports = {
  buscarCorridasPorUsuario
}
