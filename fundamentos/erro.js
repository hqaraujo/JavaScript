function tratarErroELancar(erro) {
    throw new Error('...')

}
function imprimirNomeGritando(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroELancar(e)
    } finally {
        console.log('Final')
    }
}
    const obj = { name: 'Roberto' }
    imprimirNomeGritando(obj)