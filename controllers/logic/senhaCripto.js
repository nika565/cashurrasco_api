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

module.exports = senhaCriptografada;