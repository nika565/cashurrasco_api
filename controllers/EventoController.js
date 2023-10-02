// Importando o Model para fazer as operações no meu banco de dados
const EventoModel = require('../models/Evento');

// Importando a função que executa o cálculo
const calculoChurrasco = require('./logic/calculoChurrasco');

// Função que contém todos os métodos para realizar as operações no meu banco de dados
const EventoController = {

    // Criar um novo evento
    criar: async (req, res) => {

        try {
            // Salvando o evento:
            const evento = {

                idOrganizador: req.body.idOrganizador,
                nomeEvento: req.body.nomeEvento,
                qtdHomens: req.body.qtdHomens,
                qtdMulheres: req.body.qtdMulheres,
                qtdCriancas: req.body.qtdCriancas,
                endereco: req.body.endereco,
                custoLocal: req.body.custoLocal,
                dataEvento: req.body.dataEvento,
                carnes: req.body.carnes,
                bebidas: req.body.bebidas,
                suprimentos: req.body.suprimentos,
                acompanhamentos: req.body.acompanhamentos

            }

            // Executando o cálculo antes de salvar o evento
            const calculo = calculoChurrasco(evento);

            if (calculo) {

                const resposta = await EventoModel.create(calculo);

                if (!resposta) {
                    res.status(400).json({ msg: "Erro ao salvar o evento.", status: "error" })
                } else {
                    res.status(201).json({ msg: "Evento cadastrado com sucesso.", status: "success", dados: resposta });
                }

            } else {
                res.status(400).json({ msg: "Erro ao salvar o evento. Verifique os campos digitados", status: "error" })
            }

            return;

        } catch (error) {
            console.log(error);
            return res.status(500).json({ status: 'error', msg: `Algo deu errado no servidor.` });
        }

    },

    // Ver todos os eventos criados
    todosEventos: async (req, res) => {

        try {

            const id = req.params.idOrganizador;

            const resposta = await EventoModel.find({ idOrganizador: id });

            res.status(200).json({ eventos: resposta, status: "success", msg: "Eventos retornados." });

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

                res.status(200).json({ msg: "Evento retornado.", status: "success", evento: resposta });

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
                qtdHomens: req.body.qtdHomens,
                qtdMulheres: req.body.qtdMulheres,
                qtdCriancas: req.body.qtdCriancas,
                endereco: req.body.endereco,
                custoLocal: req.body.custoLocal,
                dataEvento: req.body.dataEvento,
                carnes: req.body.carnes,
                bebidas: req.body.bebidas,
                suprimentos: req.body.suprimentos,
                acompanhamentos: req.body.acompanhamentos

            }

            // Executando o cálculo antes de salvar o evento
            const calculo = calculoChurrasco(evento);

            const edicao = await EventoModel.findByIdAndUpdate(id, calculo);

            if (edicao) {

                const dados = await EventoModel.findById(id);

                if (dados) {

                    res.status(200).json({ msg: "Evento editado com sucesso.", status: "success", dados: dados })

                } else {
                    res.status(400).json({ msg: "Não foi possível editar o evento.", status: "error" })
                }


            } else {
                res.status(400).json({ msg: "Não foi possível editar o evento.", status: "error" })
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
                res.status(200).json({ msg: "Evento deletado com sucesso.", status: "success" });
            } else {
                res.status(400).json({ msg: "Não foi possível deletar o evento", status: "error" });
            }

            return;

        } catch (error) {
            console.log(error);
            return res.status(500).json({ msg: "Erro Interno no servidor", status: "error" });
        }

    }


}

module.exports = EventoController;