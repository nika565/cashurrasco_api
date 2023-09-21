// Usando criptografia para armazenar a senha
const bcrypt = require('bcrypt');

// Função para criptografar a senha
async function senhaCriptografada(senha) {

    try {

        const hash = await bcrypt.hash(senha, 10);

        return hash;
        
    } catch (error) {
        console.log(error);
    }

}


const UsuarioModel = require('../models/Usuario');

const UsuarioController = {

    // Método para criar o usuário no banco de dados
    criar: async (req, res) => {

        try {

            const senha = await senhaCriptografada(req.body.senha);
            
            const usuario = {
                nome: req.body.nome,
                email: req.body.email,
                celular: req.body.celular,
                senha: senha
            }

            const resposta = await UsuarioModel.create(usuario);

            if (!resposta) {

                res.status(400).json({status: "error", msg: "Erro ao cadastrar usuário"});
                return;

            }

            res.status(201).json({status: "success", msg: "Usuário criado com sucesso!", resposta: resposta});

            return;

        } catch (error) {
            console.log(error);
            res.status(500).json({ status: "error", msg: "Algo deu errado no servidor" });
            return;
        }

    },

    // Listar todos os usuários
    todosUsuarios: async (req, res) => {

        try {

            // Pegar todos os campos exceto a senha do usuário
            const resposta = await UsuarioModel.find({}, '-senha').exec();

            // Caso não encontre nenhum usuário...
            if (!resposta || resposta.length < 1) {
                return res.status(404).json({ status: 'error', msg: 'Nenhum usuário não encontrado.' });
            }

            res.status(200).json({status: "success", usuarios: resposta});

            return;
            
        } catch (error) {
            
            console.log(error);
            res.status(500).json({msg: "Erro interno no servidor.", status: "error"});
            return;

        }

    },

    usuario: async (req, res) => {

        try {

            const id = req.params.id;

            const resposta = await UsuarioModel.find({ _id: id }, '-senha').exec();

            // Caso não encontre nenhum usuário...
            if (!resposta || resposta.length < 1) {
                return res.status(404).json({ status: 'error', msg: 'Usuário não encontrado.' });
            }

            res.status(200).json({status: "success", usuario: resposta});

            return;
            
        } catch (error) {
            console.log(error);
            res.status(500).json({msg: "Erro interno no servidor.", status: "error"});
            return;
        }

    }

}

module.exports = UsuarioController;