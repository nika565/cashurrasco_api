const roteadorTodosEventos = require('express').Router();

const EventoController = require('../controllers/EventoController');

roteadorTodosEventos.route('/todos/:id').get((req, res) => EventoController.todosEventos(req, res));

module.exports = roteadorTodosEventos;