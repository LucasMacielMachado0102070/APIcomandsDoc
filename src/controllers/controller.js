function listarDados(request, response) {
    response.send('Retorno de lista de informações de banco de dados');
}

function gravarDados(request, response) {
    response.send('Metodo utilizado para salvar informações!');
}

function atualizarDados(request, response) {
    response.send('Metodo utilizado para salvar informações!');
}

function deletarDados(request, response) {
    response.send('Metodo utilizado para salvar informações!');
}

module.exports = {
    listarDados,
    gravarDados,
    atualizarDados,
    deletarDados,
}