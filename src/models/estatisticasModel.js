var database = require("../database/config");

function buscarUltimasEstatisticas(idUsuario, limite_linhas) {

    var instrucaoSql = `SELECT 
        fk_usuario,
        pace as pace, 
        DATE_FORMAT(dataCorrida,'%d/%m/%Y') as dataCorrida
        FROM Publicacao
        WHERE fk_usuario = ${idUsuario}
        ORDER BY idPublicacao DESC LIMIT ${limite_linhas}`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function kpiTotalCorridas(idUsuario) {

    var instrucaoSql = `SELECT 
        COUNT(idPublicacao) as totalCorridas 
        FROM Publicacao
        WHERE fk_usuario = ${idUsuario};`

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function kpiPaceMedio(idUsuario) {

    var instrucaoSql = `SELECT 
        AVG(pace) as paceMedio 
        FROM Publicacao
        WHERE fk_usuario = ${idUsuario};`

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function kpiDistanciaTotal(idUsuario) {

    var instrucaoSql = `SELECT 
        SUM(distancia) as distanciaTotal 
        FROM Publicacao
        WHERE fk_usuario = ${idUsuario};`

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimasEstatisticas,
    kpiTotalCorridas,
    kpiPaceMedio,
    kpiDistanciaTotal,
}
