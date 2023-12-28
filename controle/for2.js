const notas = [6.7, 7.4, 9.8, 7.7]

for (let i in notas) {
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Henrique',
    sobrenome: 'Araújo',
    idade: 37,
    peso: 74
}

for(let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}