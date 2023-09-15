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