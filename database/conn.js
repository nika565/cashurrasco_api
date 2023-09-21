// Importando o dotenv para usar minhas variáveis de ambiente
require('dotenv').config();

// Importando o mongoose para se conectar ao banco de dados
const mongoose = require('mongoose');

const stringConn = process.env.STRINGCONN;

// Função para se conectar ao meu banco de dados mongoDB
async function conn() {

    try {

        mongoose.set('strictQuery', true);

        await mongoose.connect(stringConn);

        console.log(`Conectado ao banco de dados!`);
        
    } catch (error) {
        console.log(error)
    }

}

module.exports = conn;
