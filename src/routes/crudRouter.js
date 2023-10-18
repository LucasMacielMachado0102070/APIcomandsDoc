// Importar pacote do express
const { Router } = require('express');
// Instanciar o Router na variavel Router
const router = Router();
// Importar função do controller para acessar as funções
const { listarDados } = require('../controllers/controller')

router.get('/api', listarDados);

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
