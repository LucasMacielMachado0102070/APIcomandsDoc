//
const { Router } = require('express')
const router    = Router();

// Importar funções para as rotas
const {
    listarUsuarios,
    cadastrarAluno, 
    update
} = require('../controllers/alunosController');

router.get('/alunos', listarUsuarios);
router.post('/aluno/create', cadastrarAluno);
router.put('/aluno/apdate/:id', update);

module.exports = router;
