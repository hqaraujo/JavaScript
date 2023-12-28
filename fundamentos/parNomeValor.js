// par nome/valor
const saudacao = 'Opa' // contexto léxico 1

function exec() {
    const saudacao = 'Falaa' // contexto léxico 2
    return saudacao
}

//Objetos são grupos alinhados depares nome/valor
const cliente = {
    nome:'Pedro',
    idade : 32,
    peso : 90,
    endereco : {
        lagradouro : ' Rua Muito Legal',
        Number : 616
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)