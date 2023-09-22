// Importar o arquivo de configuração
const app = require('./app');
// Importar a porta do servidor
const PORT = app.get('port');

//Criando rota get
app.get('/api', (request, response) => {
    response.send('Retorno de informações de banco de dados');
    response.log('Retorno de informações de banco de dados');
});
app.post('/api', (request, response) => {
    response.send('Metodo utilizado para salvar informações!');
    response.log('Retorno de informações de banco de dados');
});
app.put('/api/:id', (request, response) => {
    response.send('Metodo utilizado para salvar informações!');
    response.log('Retorno de informações de banco de dados');
});
app.delete('/api/:id', (request, response) => {
    response.send('Metodo utilizado para salvar informações!');
    response.log('Retorno de informações de banco de dados');
});

// Testar servidor 
app.listen(PORT, () => console.log(`Running at port ${PORT}`))