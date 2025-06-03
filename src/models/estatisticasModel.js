var database = require("../database/config");

function buscarUltimasEstatisticas(idUsuario, limite_linhas) {

    var instrucaoSql = `SELECT 
        fk_usuario,
        pace as pace, 
        DATE_FORMAT(dataCorrida,'%d/%m/%Y') as dataCorrida
        FROM publicacao
        WHERE fk_usuario = ${idUsuario}
        ORDER BY idPublicacao DESC LIMIT ${limite_linhas}`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimasEstatisticas
}
