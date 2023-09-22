const roteador = require('express').Router();

// Roteadores da aplicação
const roteadorEvento = require('./eventos');
const roteadorUsuarios = require('./usuarios');
const roteadorLogin = require('./login');
const roteadorTodosEventos = require('./todosEventos');

// Saudação na rota principal
roteador.route('/').get((req, res) => res.send(JSON.stringify({id: 1, teste: 'Olá mundooooo!'})));

// Usando o roteador de eventos
roteador.use('/', roteadorEvento);

// Usando o roteador de usuários
roteador.use('/', roteadorUsuarios);

// Usando o roteador de login
roteador.use('/usuarios', roteadorLogin);

// Usando o roteador de login
roteador.use('/evento', roteadorTodosEventos);

module.exports = roteador;