function listarDados(request, response) {
    response.send('Retorno de lista de informações de banco de dados');
    console.log('get');
}; 

exports.module = {
    listarDados
}