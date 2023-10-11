# Documentação da API
* abrir no terminal do gitbash
Definir local do computador para criar a pasta do projeto
***
mkdir Nome_do_Projeto
***
Acessar a pasta do projeto
***
cd Nome_Projeto
***
Abrir pasta no vscode
***
code .
***
Iniciar o gerenciador de pacotes Node
***
npm init -y
***
Criar arquivo .gitignore: arquivos e pastas que não vão para o github
***
touch .gitignore
***
Criar arquivo .env: armazenará as variáveis do ambiente
***
touch .env
***
instalar pacotes da API
***
npm i axpress nodemom dotenv
***
* express: será o servidor da api
* nodmon: atualizar os arquivos alterados sem parar o servidor
* dotenv: gerenciador de variáveis de ambiente

informar arquivos e pastas no .gitignore
***
node_modules
.env
***
Criar pasta src para estrutura do projeto
***
mkdir src
***
Criar arquivo server.js na pasta src
***
touch src/server.js
***
Configurar o servidor
***
// Importar pacote do express
const express = require('express');
// Instanciar o express na variavel app
const app = express();
// Importar um pacote dotenv
const dotenv = require('dotenv').config();
// defnir a porta do servidor
const PORT = process.env.PORT || 3005;

// Testar servidor 
app.listen(PORT, () => console.log(`Running at port ${PORT}`))
***

Criar comando para o servidor
***
"start":"nodemon src/server.js"
***

Rodar o comando no terminal com GitBash
***
npm run star
***

## Criar estrutura para o projeto

Criar arquivo app.js na pasta src
```
touch src/app.js
```

## Rodar o comando 'npm i' sempre que fizer um clone do GitHub

## Criar o arquivo .env e o .env.example

````
touch .env
````
* Criar arquivo para salvar as variáveis necessárias da aplicação sem os valores
````
touch .env.example
````

* Criar pasta routes
````
mkdir routes
````
* Criar arquivo crudRouter.js dentro da pasta routes
````
nano crudRouter.js
````
### Ctrl + O: Salvar o arquivo
### Enter: Confirmar nome do arquivo
### Ctrl + X: Fechar o arquivo

* Digitar o código no arquivo criado
````
// Importar pacote do express
const express = require('express');

// Instanciar o Router na variavel Router
const router = express.Router();

//Criando rota geta
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

````

