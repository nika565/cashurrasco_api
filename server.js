// Importando o express
const express = require('express');

// Importando o CORS
const cors = require('cors');

// Usando variáveis de ambiente
require('dotenv').config();

const app = express();

app.use(cors());

app.use(express.json());

// Importando a função para se conectar ao meu banco de dados e executando
const conn = require('./database/conn');
conn();


const port = process.env.PORT || 3333;

// Importando o roteador da aplicação
const roteador = require('./router/routes');

app.use(roteador);

app.listen(port, () => {
    console.log(`Servidor rodando!`);
    console.log(`Acesse http://localhost:9001`);
});

// export default app;