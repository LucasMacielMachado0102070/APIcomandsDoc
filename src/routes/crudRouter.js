// Importar pacote do express
const { Router } = require('express');
// Instanciar o Router na variavel Router
const router = Router();
// Importar função do controller para acessar as funções
const { 
    listarDados,
    gravarDados,
    atualizarDados,
    deletarDados
} = require('../controllers/controller')

router.get('/listar', listarDados);

router.post('/gravar', gravarDados);

router.put('/atualizar/:id', atualizarDados);

router.delete('/deletar/:id', deletarDados)

module.exports = router;