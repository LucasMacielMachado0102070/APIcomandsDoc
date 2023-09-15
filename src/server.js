// Importar pacote do express
const { request } = require('express');
const express = require('express');
// Instanciar o express na variavel app
const app = express();
// Importar um pacote dotenv
const dotenv = require('dotenv').config();
// Defnir a porta do servidor
const PORT = process.env.PORT || 3005;

//Criando rota get
app.get('/api', (request, response) => {
    response.send('Retorno de informações de banco de dados');
});
app.post('/api', (request, response) => {
    response.send('Metodo utilizado para salvar informações!');
});
app.put('/api/:id', (request, response) => {
    response.send('Metodo utilizado para salvar informações!');
});
app.delete('/api/:id', (request, response) => {
    response.send('Metodo utilizado para salvar informações!');
});

// Testar servidor 
app.listen(PORT, () => console.log(`Running at port ${PORT}`))