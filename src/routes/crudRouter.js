// Importar pacote do express
const express = require('express');
// Instanciar o Router na variavel Router
const router = express.Router();

router.get('/api', (request, response) => {
    response.send('Retorno de informações de banco de dados');
    response.log('get');
});

router.post('/api', (request, response) => {
    response.send('Metodo utilizado para salvar informações!');
    response.log('post');
});

router.put('/api/:id', (request, response) => {
    response.send('Metodo utilizado para salvar informações!');
    response.log('put');
});

router.delete('/api/:id', (request, response) => {
    response.send('Metodo utilizado para salvar informações!');
    response.log('delete');
});

module.exports = router;
