// Função para validar o número do celular
function  validaNumeroCelular(num) {

    // verificando se o número possuí letras
    const regex = /[a-zA-Z]/;

    if(regex.test(num)) return false

    // Removendo possíveis símbolos
    const numero = num.replace(/[^0-9]/g, '')

    if(numero.length == 10 || numero.length == 11) return true

    return false;

}

module.exports = validaNumeroCelular;