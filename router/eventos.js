// Roteador para lidar com as rotas refernte aos eventos
const roteadorEvento = require('express').Router();

// Importando o controller para realizar as operações
const eventoController = require('../controllers/EventoController');

// Rota para criar um evento
roteadorEvento.route('/evento').post((req, res) => eventoController.criar(req, res));

// Rota para puxar um evento específico de um usuário
roteadorEvento.route('/evento/:id').get((req, res) => eventoController.evento(req, res));

// Rota para puxar todos os eventos de um usuário
roteadorEvento.route('/eventos/:id').get((req, res) => eventoController.todosEventos(req, res));

module.exports = roteadorEvento;