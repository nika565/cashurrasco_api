const bcrypt = require('bcrypt');

// Função para verificar a senha que o usuário mandou e a senha salva no banco
async function verificarSenha(senha, hash) {

    try {

        const validacao = await bcrypt.compare(senha, hash);

        return validacao;
        
    } catch (error) {
        console.log(`Erro ao comparar a senha: ${error}`);
        return;
    }

}

module.exports = verificarSenha;