// Armazenando uma Funçâo em uma variavel
const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)

// Armazenando uma Funçâo arrow em uma variavél
const soma =(a, b) => {
    return a + b
}
console.log(soma(2, 3))

//retorno implícito
const subtracao = (a, b) => a - b
console.log(subtracao(2, 3))

// mais reduzido 
const imprimir2 = a => console.log(a)
imprimir2('legal!!!')