// Função para validar a data
function dataIncorreta(data) {

    // Verificando se é data do passado
    const dataAtual = new Date();

    const ano = dataAtual.getFullYear();
    const mes = String(dataAtual.getMonth() + 1).padStart(2, '0'); // O mês começa em 0, então adicionamos 1
    const dia = String(dataAtual.getDate()).padStart(2, '0');

    const dataFormatada = `${ano}-${mes}-${dia}`

    if (data < dataFormatada) return true;

    return false

}

module.exports = dataIncorreta;