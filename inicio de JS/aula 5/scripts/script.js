class Carro {

    constructor(imagem, marca, modelo,  ano, cor,  velocidadeMaxima) {
        this.imagem = imagem;
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
        this.velocidadeMaxima = velocidadeMaxima;
    }
}


var carros = [];

carros.push(new Carro("imgs/bmw.jpg", "BMW", "M4", 1999, "Black", 240))
carros.push(new Carro("imgs/porsche.jpg", "Porsche", "GT3-RS", 2000, "White", 240))
carros.push(new Carro("imgs/ronda.jpg", "Ronda Civic", "G10", 2008, "Blue", 240))

console.log(carros)


for (i = 0; i < carros.length; i++) {
    document.querySelector("#resultados").innerHTML += `
        <h1>Marca: ${carros[i].marca}</h1>
        <p>Modelo: ${carros[i].modelo}</p>
        <p>Cor: ${carros[i].cor}</p>
        <p>Ano: ${carros[i].ano}</p>
        <p>Velocidade maxima: ${carros[i].velocidadeMaxima}</p>
        <img width="200px" src="${carros[i].imagem}"></img>
    `
}