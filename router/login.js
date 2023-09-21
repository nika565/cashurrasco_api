// Importando o roteador da rota de usuários
const roteadorLogin = require('express').Router();

// Importando o controller para realizar as operações do banco de dados
const usuarioController = require('../controllers/UsuarioController');

// Rota para lidar com o login
roteadorLogin.route('/login').post((req, res) => usuarioController.login(req, res));

module.exports = roteadorLogin;