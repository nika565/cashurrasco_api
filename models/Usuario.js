const mongoose = require('mongoose');

const { Schema } = mongoose;

const usuarioSchema = new Schema({

    nome: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    celular: {
        type: String,
        required: true
    },

    senha: {
        type: String,
        required: true,
    }

}, {timestamps: true});

const Usuario = mongoose.model("Usuarios", usuarioSchema);

module.exports = Usuario;