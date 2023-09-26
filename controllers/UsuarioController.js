// Importando a funções para validações e processos
const senhaCriptografada = require('./logic/senhaCripto');
const verificarSenha = require('./logic/verificarSenha');
const emailDuplicado = require('./logic/emailDuplicado');
const cellDuplicado = require('./logic/cellDuplicado');


// Model para realizar as operações no banco de dados
const UsuarioModel = require('../models/Usuario');

// Objeto com os métodos para manipular o banco de dados e realizar o CRUD
const UsuarioController = {

    // Método para criar o usuário no banco de dados
    criar: async (req, res) => {

        try {
            
            const senha = await senhaCriptografada(req.body.senha);

            const verificaEmail = await emailDuplicado(req.body.email);
            
            const verificaCelular = await cellDuplicado(req.body.celular);


            // Verificação de email duplicado
            if (verificaEmail){
                return res.status(400).json({msg: "Campos de email ou senha inválidos.", status: "error"});
            } 

            // Verificação de telefone duplicado
            if (verificaCelular){
                return res.status(400).json({msg: "Campos de email ou senha inválidos.", status: "error"});
            }
            
            const usuario = {
                nome: req.body.nome,
                email: req.body.email,
                celular: req.body.celular,
                senha: senha
            }

            const resposta = await UsuarioModel.create(usuario);

            const dadosUsuario = {
                id: resposta._id,
                nome: resposta.nome,
                email: resposta.email,
                celular: resposta.celular
            }

            if (!resposta) {

                res.status(400).json({status: "error", msg: "Erro ao cadastrar usuário"});
                return;

            }

            res.status(201).json({status: "success", msg: "Usuário criado com sucesso!", dados: dadosUsuario});

            return;

        } catch (error) {
            console.log(error);
            res.status(500).json({ status: "error", msg: "Algo deu errado no servidor" });
            return;
        }

    },

    // Buscar usuário
    usuario: async (req, res) => {

        try {

            const id = req.params.id;

            // o .exec() serve para retornar uma promise
            const resposta = await UsuarioModel.find({ _id: id }, '-senha').exec();

            // Caso não encontre nenhum usuário...
            if (!resposta || resposta.length < 1) {
                return res.status(404).json({ status: 'error', msg: 'Usuário não encontrado.' });
            }

            res.status(200).json({status: "success", usuario: resposta, msg: "Usuário retornado com sucesso."});

            return;
            
        } catch (error) {
            console.log(error);
            res.status(500).json({msg: "Erro interno no servidor.", status: "error"});
            return;
        }

    },

    // Método para lidar com login
    login: async (req, res) => {

        try {

            // Retornar o registro do email
            const email = req.body.email;

            // .exec() ---> retorna uma promise
            const verificaEmail = await UsuarioModel.findOne({email: email}).exec();

            console.log(verificaEmail);

            if (verificaEmail){

                // Processo de verificar a senha
                const senha = await verificarSenha(req.body.senha, verificaEmail.senha);

                // Dados do usuário a ser retornado
                const dadosUsuario = {
                    id: verificaEmail._id,
                    nome: verificaEmail.nome,
                    email: verificaEmail.email,
                    celular: verificaEmail.celular
                }

                if (senha) {
                    res.status(200).json({msg: 'Logado!', status: 'success', dados: dadosUsuario})
                } else {
                    res.status(400).json({status: "error", msg: "Email ou senha inválidos..."});
                }

                return;

            } else {
                res.status(404).json({status: "error", msg: "Email ou senha inválidos..."});
                return;
            }

            
        } catch (error) {
            
            console.log(`Erro: ${error}`);
            res.status(500).json({status: "error", msg:"Algo deu errado no servidor"});
            return;

        }

    },

    // Método para editar usuário
    editar: async (req, res) => {

        try {

            // Pegando o ID por parâmetro que veio da URL
            const id = req.params.id;

            // Pegando a possível nova senha e a criptografando
            const novaSenha = await senhaCriptografada(req.body.senha);

            // Salavando as alterações que vieram da requisição
            const usuario = {
                nome: req.body.nome,
                email: req.body.email,
                celular: req.body.celular,
                senha: novaSenha,
            }

            // Realizando a edição
            const edicao = await UsuarioModel.findByIdAndUpdate(id, usuario);

            if (!edicao) {
                res.status(400).json({msg: "Não foi possível alterar o usuário.", status: "error"});
            } else {
                res.status(200).json({msg: "Usuário editado com sucesso!", status: "success", dados: edicao})
            }

            return;
            
        } catch (error) {
            
            console.log(error);
            return res.status(500).json({msg: "Erro no servidor.", status: "error"});

        }

    },

    // Método para excluir o usuário
    apagar: async (req, res) => {

        try {

            const id = req.params.id;

            const deletar = await UsuarioModel.findByIdAndDelete(id);

            if (deletar) {
                res.status(200).json({msg: "Usuário deletado com sucesso.", status: "success", resposta: deletar});
            } else {
                res.status(400).json({msg: "Não foi possível deletar o usuário", status: "error"});
            }

            return;
            
        } catch (error) {
            
            console.log(error);
            return res.status(500).json({msg: "Erro no servidor.", status: "error"});

        }

    }

}

module.exports = UsuarioController;