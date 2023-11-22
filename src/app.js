// Importar pacote do express
const express = require('express');

// Instanciar o express na variavel app
const app = express();
app.use(express.json());

// Importar as rotas para serem executadas na aplicação
const crudRouter = require('./routes/crudRouter');
// Importar as rotas para serem executadas na aplicação
const alunosRouter = require('./routes/alunosRouter');

// Importar o pacote detenv
const dotenv = require('dotenv').config();

// HABILITAR A UTILIZAÇÃO DO CRUDROUTER
app.use('/api', crudRouter);
// HABILITAR A UTILIZAÇÃO DO CRUDROUTER
app.use('/api', alunosRouter);

// Setar a porta do servidor, a partir do arquivo .env
app.set('port', process.env.PORT);

// Exportar as configura ções do app para outros arquivos acessarem
module.exports = app;