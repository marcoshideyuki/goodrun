var database = require("../database/config");

function listar() {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucaoSql = `
        SELECT 
            p.idPublicacao AS idPublicacao,
            p.titulo,
            p.descricao,
            p.fk_usuario,
            u.idUsuario AS idUsuario,
            u.nomeUsuario,
            u.email,
            u.senha
        FROM publicacao p
            INNER JOIN usuario u
                ON p.fk_usuario = u.idUsuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function pesquisarDescricao(texto) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function pesquisarDescricao()");
    var instrucaoSql = `
        SELECT 
            p.idPublicacao AS idPublicacao,
            p.titulo,
            p.descricao,
            p.fk_usuario,
            p.idUsuario AS idUsuario,
            p.nome,
            p.email,
            p.senha
        FROM publicacao p
            INNER JOIN usuario u
                ON p.fk_usuario = u.idUsuario
        WHERE a.descricao LIKE '${texto}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listarPorUsuario(idUsuario) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listarPorUsuario()");
    var instrucaoSql = `
        SELECT 
            p.idPublicacao AS idPublicacao,
            p.titulo,
            p.descricao,
            p.fk_usuario,
            p.distancia,
            p.tempo,
            u.idUsuario AS idUsuario,
            u.nomeUsuario,
            u.email,
            u.senha
        FROM publicacao p
            INNER JOIN usuario u
                ON p.fk_usuario = u.idUsuario
        WHERE u.idUsuario = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function publicar(titulo, descricao, idUsuario, distancia, tempo) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function publicar(): ", titulo, descricao, idUsuario, distancia, tempo);
    var instrucaoSql = `
        INSERT INTO publicacao (titulo, descricao, fk_usuario, distancia, tempo) VALUES ('${titulo}', '${descricao}', ${idUsuario}, ${distancia}, ${tempo});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function editarTitulo(novoTitulo, idPublicacao) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function editar(): ", novoTitulo, idPublicacao);
    var instrucaoSql = `
        UPDATE publicacao SET titulo = '${novoTitulo}' WHERE idPublicacao = ${idPublicacao};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function editarDistancia(novaDistancia, idPublicacao) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function editar(): ", novaDistancia, idPublicacao);
    var instrucaoSql = `
        UPDATE publicacao SET distancia = '${novaDistancia}' WHERE idPublicacao = ${idPublicacao};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function editarTempo(novoTempo, idPublicacao) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function editar(): ", novoTempo, idPublicacao);
    var instrucaoSql = `
        UPDATE publicacao SET tempo = '${novoTempo}' WHERE idPublicacao = ${idPublicacao};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function editarDescricao(novaDescricao, idPublicacao) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function editar(): ", novaDescricao, idPublicacao);
    var instrucaoSql = `
        UPDATE publicacao SET descricao = '${novaDescricao}' WHERE idPublicacao = ${idPublicacao};
    `;    
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}    
function deletar(idPublicacao) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function deletar():", idPublicacao);
    var instrucaoSql = `
        DELETE FROM publicacao WHERE idPublicacao = ${idPublicacao};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    listar,
    listarPorUsuario,
    pesquisarDescricao,
    publicar,
    editarTitulo,
    editarDistancia,
    editarTempo,
    editarDescricao,
    deletar
}
