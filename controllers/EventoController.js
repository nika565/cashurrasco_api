// Importando o Model para fazer as operações no meu banco de dados
const EventoModel = require('../models/Evento');

// Função que contém todos os métodos para realizar as operações no meu banco de dados
const EventoController = {

    // Criar um novo evento
    criar: async (req, res) => {

        try {

            // Algumas validações antes de salvar o evento

            if (req.body.carnes == '' || req.body.carnes == 'undefined' || req.body.carnes == null) {
                res.status(500).json({ status: error, msg: `Não foi possível salvar o evento. Verifique se todos os campos foram preenchidos corretamente` });
                return;
            }

            if (req.body.bebidas == '' || req.body.bebidas == 'undefined' || req.body.bebidas == null) {
                res.status(500).json({ status: error, msg: `Não foi possível salvar o evento. Verifique se todos os campos foram preenchidos corretamente` });
                return;
            }

            if (req.body.suprimentos == '' || req.body.suprimentos == 'undefined' || req.body.suprimentos == null) {
                res.status(500).json({ status: error, msg: `Não foi possível salvar o evento. Verifique se todos os campos foram preenchidos corretamente` });
                return;
            }

            // Salvando o evento:
            const evento = {

                idOrganizador: req.body.idOrganizador,
                nomeEvento: req.body.nomeEvento,
                qtdPessoas: req.body.qtdPessoas,
                endereco: req.body.endereco,
                carnes: req.body.carnes,
                bebidas: req.body.bebidas,
                suprimentos: req.body.suprimentos,
                custoPessoa: req.body.custoPessoa,
                custoTotal: req.body.custoTotal,

            }

            const resposta = await EventoModel.create(evento);

            if (!resposta) {
                res.status(400).json({ msg: "Erro ao salvar o evento." })
            } else {
                res.status(201).json({ msg: "Evento cadastrado com sucesso.", resposta });
            }

            return;

        } catch (error) {
            console.log(error);
            res.status(500).json({ status: 'error', msg: `Algo deu errado no servidor.` });
            return;
        }

    },

    // ver todos os eventos criados
    todosEventos: async (req, res) => {

        try {

            const id = req.params.idOrganizador;

            const resposta = await EventoModel.find({ idOrganizador: id });

            res.status(200).json({ eventos: resposta });

            return;

        } catch (error) {
            console.log(error);
            res.status(500).json({ status: "error", msg: "Algo deu errado no servidor..." });
        }

    },

    // Buscar um evento específico
    evento: async (req, res) => {

        try {

            // Pegando o ID do evento
            const id = req.params.id;

            const resposta = await EventoModel.findById(id);

            if (!resposta) {

                res.status(404).json({ msg: 'Evento que você procura não foi encontrado.', status: 'error' });

            } else {

                res.status(200).json(resposta);

            }

            return;

        } catch (error) {
            console.log(error);
            res.status(500).json({ status: 'error', msg: "Algo deu errado no servidor" });
            return;
        }

    }

}

module.exports = EventoController;