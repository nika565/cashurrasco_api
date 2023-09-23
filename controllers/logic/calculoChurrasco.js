// Função para calcular a quantidade e o preco das coisas
function calculoChurrasco (obj) {

    // Somando a quantidade de consumo de carne
    const qtdConsumoHomens = obj.qtdHomens * 0.6;
    const qtdConsumoMulheres = obj.qtdMulheres * 0.4;
    const qtdConsumoCriancas = obj.qtdCriancas * 0.25;

    const totalConsumoCarne = qtdConsumoHomens + qtdConsumoCriancas + qtdConsumoMulheres;

    // Somando a quantidade de consumo de acompanhamentos
    const qtdAcompanhamentos = obj.qtdHomens + obj.qtdMulheres + obj.qtdCriancas * 0.3;

    const qtdbebidas = obj.qtdHomens + obj.qtdMulheres + obj.qtdCriancas * 0.5;

    // Colocando a quantidade de carne: Bovino
    obj.carnes.bovina.contraFile.qtd = totalConsumoCarne;
    obj.carnes.bovina.maminha.qtd = totalConsumoCarne;
    obj.carnes.bovina.cupim.qtd = totalConsumoCarne;

    // Colocando o preço
    obj.carnes.bovina.contraFile.precoTotal = totalConsumoCarne * 1000;
    obj.carnes.bovina.maminha.precoTotal = totalConsumoCarne * 1000;
    obj.carnes.bovina.cupim.precoTotal = totalConsumoCarne * 1000;

    // Colocando a quantidade de carne: Suino
    obj.carnes.suina.picanha.qtd = totalConsumoCarne;
    obj.carnes.suina.linguica.qtd = totalConsumoCarne;
    obj.carnes.suina.paleta.qtd = totalConsumoCarne;

    // Colocando preço
    obj.carnes.suina.picanha.precoTotal = totalConsumoCarne * 1000;
    obj.carnes.suina.linguica.precoTotal = totalConsumoCarne * 1000;
    obj.carnes.suina.paleta.precoTotal = totalConsumoCarne * 1000;


    // Colocando a quantidade de carne: Frango
    obj.carnes.frango.coxa.qtd = totalConsumoCarne;
    obj.carnes.frango.coracao = totalConsumoCarne;
    obj.carnes.frango.asa = totalConsumoCarne;

    // Colocando preço
    obj.carnes.frango.coxa.precoTotal = totalConsumoCarne * 1000;
    obj.carnes.frango.coracao.precoTotal = totalConsumoCarne * 1000;
    obj.carnes.frango.asa.precoTotal = totalConsumoCarne * 1000;

};

module.exports = calculoChurrasco; 