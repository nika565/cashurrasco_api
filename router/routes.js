const roteador = require('express').Router();

const roteadorEvento = require('./eventos');

const roteadorUsuarios = require('./usuarios');

const roteadorLogin = require('./login');

// Saudação na rota principal
roteador.route('/').get((req, res) => res.send(JSON.stringify({id: 1, teste: 'Olá mundooooo!'})));

// Usando o roteador de eventos
roteador.use('/', roteadorEvento);

// Usando o roteador de usuários
roteador.use('/', roteadorUsuarios);

// Usando o roteador de login
roteador.use('/usuarios', roteadorLogin);

module.exports = roteador;