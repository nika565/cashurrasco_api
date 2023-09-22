// Importando o Model para fazer as operações no meu banco de dados
const EventoModel = require('../models/Evento');

// Função que contém todos os métodos para realizar as operações no meu banco de dados
const EventoController = {

    // Criar um novo evento
    criar: async (req, res) => {

        try {
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
            return res.status(500).json({ status: 'error', msg: `Algo deu errado no servidor.` });
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
            return res.status(500).json({ status: "error", msg: "Algo deu errado no servidor..." });
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
            return res.status(500).json({ status: 'error', msg: "Algo deu errado no servidor" });
        }

    },

    // Editar evento
    editar: async (req, res) => {

        try {

            // Pegando o id do evento que veio pela URL
            const id = req.params.id;

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

            const edicao = await EventoModel.findByIdAndUpdate(id, evento);

            if (edicao) {

                res.status(200).json({msg: "Evento editado com sucesso.", status: "success", dados: edicao})

            } else {
                res.status(400).json({msg: "Não foi possível editar o evento.", status: "error"})
            }

        } catch (error) {
            console.log(error);
            return res.status(500).json({ msg: "Algo deu errado no servidor.", status: "error" })
        }

    },

    // Apagar o evento
    apagar: async (req, res) => {

        try {

            const id = req.params.id;

            const deletar = await EventoModel.findByIdAndDelete(id);

            if (deletar) {
                res.status(200).json({msg: "Evento deletado com sucesso.", status: "success", resposta: deletar});
            } else {
                res.status(400).json({msg: "Não foi possível deletar o evento", status: "error"});
            }

            return;
            
        } catch (error) {
            console.log(error);
            return res.status(500).json({msg: "Erro Interno no servidor", status: "error"});
        }

    }


}

module.exports = EventoController;