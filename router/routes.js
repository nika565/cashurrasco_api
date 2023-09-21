const roteador = require('express').Router();

const roteadorEvento = require('./eventos');

const roteadorUsuarios = require('./usuarios');

// Saudação na rota principal
roteador.route('/').get((req, res) => res.send(JSON.stringify({id: 1, teste: 'Olá mundooooo!'})));

// Usando o roteador de eventos
roteador.use('/', roteadorEvento);

// Usando o roteador de usuários
roteador.use('/', roteadorUsuarios);

module.exports = roteador;