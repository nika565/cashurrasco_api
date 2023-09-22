// Importando o Model de usuário
const UsuarioModel = require('../../models/Usuario');

// Verificação do email para não salvar duplicado
async function emailDuplicado(email) {

    try {

        // retorna um array com todos os registro que encontrar
        const array = await UsuarioModel.find({ email: email });

        if (array.length == 0) return false;
            
        return true;


    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: "Erro interno no servidor", status: "error" });
    }

}

module.exports = emailDuplicado;