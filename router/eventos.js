// Roteador para lidar com as rotas refernte aos eventos
const roteadorEvento = require('express').Router();

// Importando o controller para realizar as operações
const eventoController = require('../controllers/EventoController');

// Rota para criar um evento
roteadorEvento.route('/evento').post((req, res) => eventoController.criar(req, res));

// Rota para puxar um evento específico de um usuário
roteadorEvento.route('/evento/:id').get((req, res) => eventoController.evento(req, res));

// Rota para editar um evento de um usuário
roteadorEvento.route('/evento/:id').put((req, res) => eventoController.editar(req, res));

// Rota para deletar um evento de um usuário
roteadorEvento.route('/evento/:id').delete((req, res) => eventoController.apagar(req, res));

module.exports = roteadorEvento;