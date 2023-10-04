// Função para validar a data
function dataIncorreta(data) {

    const dataAtual = new Date();

    const regexData = /^\d{2}\/\d{2}\/\d{4}$/;


    if (!regexData.test(data)) return true;

    // Converte a data inserida em um objeto Date
    const dataUsuario = converterData(data);

    // Verificando se a data é menor que a data atual
    if (dataUsuario < dataAtual) {
        return true;
    }

    return false

}

// Função para converter uma data no formato "DD/MM/AAAA" em um objeto Date
function converterData(dataString) {
    const partes = dataString.split('/');
    if (partes.length === 3) {
        const dia = parseInt(partes[0], 10);
        const mes = parseInt(partes[1], 10) - 1; // Mês começa em 0
        const ano = parseInt(partes[2], 10);
        return new Date(ano, mes, dia);
    }
    return null; // Retorna null se o formato for inválido
}

module.exports = dataIncorreta;