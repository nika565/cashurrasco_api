// Função para calcular a quantidade e o preco das coisas
function calculoChurrasco (obj) {

    let soma = 0

    // Somando a quantidade de consumo de carne
    const qtdConsumoHomens = obj.qtdHomens * 0.6;
    const qtdConsumoMulheres = obj.qtdMulheres * 0.4;
    const qtdConsumoCriancas = obj.qtdCriancas * 0.25;

    const totalConsumoCarne = Math.floor(qtdConsumoHomens + qtdConsumoCriancas + qtdConsumoMulheres);

    // Somando a quantidade de consumo de acompanhamentos
    const qtdAcompanhamentos = Math.floor(obj.qtdHomens + obj.qtdMulheres + obj.qtdCriancas * 0.1);

    const qtdSuprimentos = Math.floor(obj.qtdHomens + obj.qtdMulheres + obj.qtdCriancas * 0.3);

    const qtdbebidas = Math.floor(obj.qtdHomens + obj.qtdMulheres + obj.qtdCriancas * 0.8);

    // Colocando a quantidade de carne: Bovino
    obj.carnes.bovino.contraFile.selecionado ? obj.carnes.bovino.contraFile.qtd = totalConsumoCarne : obj.carnes.bovino.contraFile.qtd = 0;
    obj.carnes.bovino.maminha.selecionado ? obj.carnes.bovino.maminha.qtd = totalConsumoCarne : obj.carnes.bovino.maminha.qtd = 0;
    obj.carnes.bovino.alcatra.selecionado ? obj.carnes.bovino.alcatra.qtd = totalConsumoCarne : obj.carnes.bovino.alcatra.qtd = 0;

    // Colocando o preço
    obj.carnes.bovino.contraFile.selecionado ? obj.carnes.bovino.contraFile.precoTotal = totalConsumoCarne * 16.50 : obj.carnes.bovino.contraFile.precoTotal = 0;
    obj.carnes.bovino.maminha.selecionado ? obj.carnes.bovino.maminha.precoTotal = totalConsumoCarne * 15.48 : obj.carnes.bovino.maminha.precoTotal = 0;
    obj.carnes.bovino.alcatra.selecionado ? obj.carnes.bovino.alcatra.precoTotal = totalConsumoCarne * 13.90 : obj.carnes.bovino.alcatra.precoTotal = 0;
    
    soma += obj.carnes.bovino.contraFile.precoTotal + obj.carnes.bovino.maminha.precoTotal +  obj.carnes.bovino.alcatra.precoTotal



    // Colocando a quantidade de carne: Suino
    obj.carnes.suino.fileSuino.selecionado ? obj.carnes.suino.fileSuino.qtd = totalConsumoCarne : obj.carnes.suino.fileSuino.qtd = 0;
    obj.carnes.suino.costela.selecionado ? obj.carnes.suino.costela.qtd = totalConsumoCarne : obj.carnes.suino.costela.qtd = 0;
    obj.carnes.suino.lombo.selecionado ? obj.carnes.suino.lombo.qtd = totalConsumoCarne : obj.carnes.suino.lombo.qtd = 0;

    // Colocando preço
    obj.carnes.suino.fileSuino.selecionado ? obj.carnes.suino.fileSuino.precoTotal = totalConsumoCarne * 13 : obj.carnes.suino.fileSuino.precoTotal = 0;
    obj.carnes.suino.costela.selecionado ? obj.carnes.suino.costela.precoTotal = totalConsumoCarne * 15 : obj.carnes.suino.costela.precoTotal = 0;
    obj.carnes.suino.lombo.selecionado ? obj.carnes.suino.lombo.precoTotal = totalConsumoCarne * 15.49 : obj.carnes.suino.lombo.precoTotal = 0;

    soma += obj.carnes.suino.fileSuino.precoTotal + obj.carnes.suino.costela.precoTotal + obj.carnes.suino.lombo.precoTotal


    // Colocando a quantidade de carne: Frango
    obj.carnes.frango.sobrecoxa.selecionado ? obj.carnes.frango.sobrecoxa.qtd = totalConsumoCarne : obj.carnes.frango.sobrecoxa.qtd = 0;
    obj.carnes.frango.coracao.selecionado ? obj.carnes.frango.coracao.qtd = totalConsumoCarne : obj.carnes.frango.coracao.qtd = 0;
    obj.carnes.frango.asa.selecionado ? obj.carnes.frango.asa.qtd = totalConsumoCarne : obj.carnes.frango.asa.qtd = 0;

    // Colocando preço
    obj.carnes.frango.sobrecoxa.selecionado ? obj.carnes.frango.sobrecoxa.precoTotal = totalConsumoCarne * 7.38 : obj.carnes.frango.sobrecoxa.precoTotal = 0;
    obj.carnes.frango.coracao.selecionado ? obj.carnes.frango.coracao.precoTotal = totalConsumoCarne * 5.50 : obj.carnes.frango.coracao.precoTotal = 0;
    obj.carnes.frango.asa.selecionado ? obj.carnes.frango.asa.precoTotal = totalConsumoCarne * 5.15 : obj.carnes.frango.asa.precoTotal = 0;

    soma += obj.carnes.frango.sobrecoxa.precoTotal + obj.carnes.frango.coracao.precoTotal + obj.carnes.frango.asa.precoTotal


    // Colocando a quantidade de carne: Linguiças
    obj.carnes.linguicas.toscana.selecionado ? obj.carnes.linguicas.toscana.qtd = totalConsumoCarne : obj.carnes.linguicas.toscana.qtd = 0;
    obj.carnes.linguicas.cuiabana.selecionado ? obj.carnes.linguicas.cuiabana.qtd = totalConsumoCarne : obj.carnes.linguicas.cuiabana.qtd = 0;
    obj.carnes.linguicas.linguicaFrango.selecionado ? obj.carnes.linguicas.linguicaFrango.qtd = totalConsumoCarne : obj.carnes.linguicas.linguicaFrango.qtd = 0;

    // Colocando preço
    obj.carnes.linguicas.toscana.selecionado ? obj.carnes.linguicas.toscana.precoTotal = totalConsumoCarne * 10.14 : obj.carnes.linguicas.toscana.precoTotal = 0;
    obj.carnes.linguicas.cuiabana.selecionado ? obj.carnes.linguicas.cuiabana.precoTotal = totalConsumoCarne * 7.32 : obj.carnes.linguicas.cuiabana.precoTotal = 0;
    obj.carnes.linguicas.linguicaFrango.selecionado ? obj.carnes.linguicas.linguicaFrango.precoTotal = totalConsumoCarne * 9 : obj.carnes.linguicas.linguicaFrango.precoTotal = 0;

    soma +=  obj.carnes.linguicas.toscana.precoTotal + obj.carnes.linguicas.cuiabana.precoTotal + obj.carnes.linguicas.linguicaFrango.precoTotal



    // Colocando a quantidade de Bebidas
    obj.bebidas.agua.selecionado ? obj.bebidas.agua.qtd = qtdbebidas : obj.bebidas.agua.qtd = 0;
    obj.bebidas.refri.selecionado ? obj.bebidas.refri.qtd = qtdbebidas * 1.4 : obj.bebidas.refri.qtd = 0;
    obj.bebidas.suco.selecionado ? obj.bebidas.suco.qtd = qtdbebidas : obj.bebidas.suco.qtd = 0;
    obj.bebidas.cerveja.selecionado ? obj.bebidas.cerveja.qtd = qtdbebidas * 1.2 : obj.bebidas.cerveja.qtd = 0;

    // Colocando preço
    obj.bebidas.agua.selecionado ? obj.bebidas.agua.precoTotal = qtdbebidas * 1.5: obj.bebidas.agua.precoTotal = 0;
    obj.bebidas.refri.selecionado ? obj.bebidas.refri.precoTotal = qtdbebidas * 6.42: obj.bebidas.refri.precoTotal = 0;
    obj.bebidas.suco.selecionado ? obj.bebidas.suco.precoTotal = qtdbebidas * 5.22: obj.bebidas.suco.precoTotal = 0;
    obj.bebidas.cerveja.selecionado ? obj.bebidas.cerveja.precoTotal = qtdbebidas * 2.58: obj.bebidas.cerveja.precoTotal = 0;

    soma +=  obj.bebidas.agua.precoTotal + obj.bebidas.refri.precoTotal + obj.bebidas.suco.precoTotal + obj.bebidas.cerveja.precoTotal



    // Colocando a quantidade de suprimentos
    obj.suprimentos.copoDesc.selecionado ? obj.suprimentos.copoDesc.qtd = qtdSuprimentos * 1.8 : obj.suprimentos.copoDesc.qtd = 0;
    obj.suprimentos.talheres.selecionado ? obj.suprimentos.talheres.qtd = qtdSuprimentos * 1.8 : obj.suprimentos.talheres.qtd = 0;
    obj.suprimentos.prato.selecionado ? obj.suprimentos.prato.qtd = qtdSuprimentos * 1.8 : obj.suprimentos.prato.qtd = 0;
    obj.suprimentos.carvao.selecionado ? obj.suprimentos.carvao.qtd = qtdSuprimentos * 1.8 : obj.suprimentos.carvao.qtd = 0;
    obj.suprimentos.guardanapos.selecionado ? obj.suprimentos.guardanapos.qtd = qtdSuprimentos * 1.8 : obj.suprimentos.guardanapos.qtd = 0;
    obj.suprimentos.palitos.selecionado ? obj.suprimentos.palitos.qtd = qtdSuprimentos * 1.8 : obj.suprimentos.palitos.qtd = 0;

    // Colocando preço
    obj.suprimentos.copoDesc.selecionado ? obj.suprimentos.copoDesc.precoTotal = qtdSuprimentos * 8.24 : obj.suprimentos.copoDesc.precoTotal = 0;
    obj.suprimentos.talheres.selecionado ? obj.suprimentos.talheres.precoTotal = qtdSuprimentos * 6.58 : obj.suprimentos.talheres.precoTotal = 0;
    obj.suprimentos.prato.selecionado ? obj.suprimentos.prato.precoTotal = qtdSuprimentos * 4.27 : obj.suprimentos.prato.precoTotal = 0;
    obj.suprimentos.carvao.selecionado ? obj.suprimentos.carvao.precoTotal = qtdSuprimentos * 17.50 : obj.suprimentos.carvao.precoTotal = 0;
    obj.suprimentos.guardanapos.selecionado ? obj.suprimentos.guardanapos.precoTotal = qtdSuprimentos * 2.44 : obj.suprimentos.guardanapos.precoTotal = 0;
    obj.suprimentos.palitos.selecionado ? obj.suprimentos.palitos.precoTotal = qtdSuprimentos * 0.5 : obj.suprimentos.palitos.precoTotal = 0;

    soma += obj.suprimentos.copoDesc.precoTotal + obj.suprimentos.talheres.precoTotal + obj.suprimentos.prato.precoTotal + obj.suprimentos.carvao.precoTotal + obj.suprimentos.guardanapos.precoTotal + obj.suprimentos.palitos.precoTotal



    // Colocando a quantidade de Acompanhamentos
    obj.acompanhamentos.arroz.selecionado ? obj.acompanhamentos.arroz.qtd = qtdAcompanhamentos / 1.2 : obj.acompanhamentos.arroz.qtd = 0;
    obj.acompanhamentos.farofa.selecionado ? obj.acompanhamentos.farofa.qtd = qtdAcompanhamentos / 1.1  : obj.acompanhamentos.farofa.qtd = 0;
    obj.acompanhamentos.pao.selecionado ? obj.acompanhamentos.pao.qtd = qtdAcompanhamentos / 1.5  : obj.acompanhamentos.pao.qtd = 0;
    obj.acompanhamentos.paoAlho.selecionado ? obj.acompanhamentos.paoAlho.qtd = qtdAcompanhamentos / 1.1  : obj.acompanhamentos.paoAlho.qtd = 0;
    obj.acompanhamentos.vinagrete.selecionado ? obj.acompanhamentos.vinagrete.qtd = qtdAcompanhamentos / 1.3  : obj.acompanhamentos.vinagrete.qtd = 0;
    obj.acompanhamentos.queijoCoalho.selecionado ? obj.acompanhamentos.queijoCoalho.qtd = qtdAcompanhamentos / 2  : obj.acompanhamentos.queijoCoalho.qtd = 0;

    // Colocando preço
    obj.acompanhamentos.arroz.selecionado ? obj.acompanhamentos.arroz.precoTotal = qtdAcompanhamentos * 6.70 : obj.acompanhamentos.arroz.precoTotal = 0;
    obj.acompanhamentos.farofa.selecionado ? obj.acompanhamentos.farofa.precoTotal = qtdAcompanhamentos * 7.40 : obj.acompanhamentos.farofa.precoTotal = 0;
    obj.acompanhamentos.pao.selecionado ? obj.acompanhamentos.pao.precoTotal = qtdAcompanhamentos * 3.5 : obj.acompanhamentos.pao.precoTotal = 0;
    obj.acompanhamentos.paoAlho.selecionado ? obj.acompanhamentos.paoAlho.precoTotal = qtdAcompanhamentos * 2.95 : obj.acompanhamentos.paoAlho.precoTotal = 0;
    obj.acompanhamentos.vinagrete.selecionado ? obj.acompanhamentos.vinagrete.precoTotal = qtdAcompanhamentos * 2.15 : obj.acompanhamentos.vinagrete.precoTotal = 0;
    obj.acompanhamentos.queijoCoalho.selecionado ? obj.acompanhamentos.queijoCoalho.precoTotal = qtdAcompanhamentos * 6.25 : obj.acompanhamentos.queijoCoalho.precoTotal = 0;

    soma += obj.acompanhamentos.arroz.precoTotal + obj.acompanhamentos.farofa.precoTotal + obj.acompanhamentos.pao.precoTotal + obj.acompanhamentos.paoAlho.precoTotal + obj.acompanhamentos.vinagrete.precoTotal + obj.acompanhamentos.queijoCoalho.precoTotal

    obj.custoPessoa = soma / (qtdConsumoHomens + qtdConsumoMulheres + qtdConsumoCriancas);
    obj.custoTotal = soma;

    return obj;

};

module.exports = calculoChurrasco; 