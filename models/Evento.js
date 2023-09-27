// Importando o mongoose
const mongoose = require('mongoose');

// Usando o construtor Schema para criar o nosso documento
const { Schema } = mongoose;

const eventoSchema = new Schema({

    idOrganizador:{
        type: String,
        required: true
    },

    nomeEvento: {
        type: String,
        required: true
    },

    qtdHomens: {
        type: Number,
        required: true
    },

    qtdMulheres: {
        type: Number,
        required: true
    },

    qtdCriancas: {
        type: Number,
        required: true
    },

    endereco: {
        type: String,
        required: true
    },

    custoLocal: {
        type: Number,
        required: true
    },

    dataEvento: {
        type: Date,
        required: true
    },

    carnes: {
        type: Schema.Types.Mixed
    },

    bebidas: {
        type: Schema.Types.Mixed
    },

    suprimentos: {
        type: Schema.Types.Mixed
    },

    acompanhamentos: {
        type: Schema.Types.Mixed
    },

    custoPessoa: {
        type: Number,
        required: true
    },

    custoTotal:{
        type: Number,
        required: true
    }

}, 
{
    timestamps: true
}
);

const Evento = mongoose.model("Evento", eventoSchema);

module.exports = Evento;