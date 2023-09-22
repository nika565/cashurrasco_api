// Importando o roteador da rota de usuários
const roteadorUsuarios = require('express').Router();

// Importando o controller para realizar as operações do banco de dados
const usuarioController = require('../controllers/UsuarioController');

// Importando o roteador login
const roteadorLogin = require('./login');


// Rota para cadastrar um usuário
roteadorUsuarios.route('/usuarios').post((req, res) => usuarioController.criar(req, res));

// Rota para buscar um usuário específico
roteadorUsuarios.route('/usuarios/:id').get((req, res) => usuarioController.usuario(req, res));

// Rota para editar um usuário
roteadorUsuarios.route('/usuarios/:id').put((req, res) => usuarioController.editar(req, res));

//Rota para apagar um usuário
roteadorUsuarios.route('/usuarios/:id').delete((req, res) => usuarioController.apagar(req, res));

module.exports = roteadorUsuarios;