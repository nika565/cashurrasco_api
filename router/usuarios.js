// Importando o roteador da rota de usuários
const roteadorUsuarios = require('express').Router();

// Importando o controller para realizar as operações do banco de dados
const usuarioController = require('../controllers/UsuarioController');


// Rota para cadastrar um usuário
roteadorUsuarios.route('/usuarios').post((req, res) => usuarioController.criar(req, res));

// Rota para buscar todos os usuários
roteadorUsuarios.route('/usuarios').get((req, res) => usuarioController.todosUsuarios(req, res));

// Rota para buscar um usuário específico
roteadorUsuarios.route('/usuarios/:id').get((req, res) => usuarioController.usuario(req, res));

module.exports = roteadorUsuarios;