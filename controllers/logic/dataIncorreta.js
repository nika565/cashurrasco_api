// Função para validar a data
function dataIncorreta (data) {

    // Verificando se é data do passado
    const dataAtual = new Date();

    if (data < dataAtual) return true;

    return false

}

module.exports = dataIncorreta;