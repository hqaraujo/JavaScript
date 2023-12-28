function janeiro(meta1, meta2) {
    const contratado = meta1 || meta2 
    const comemorar = meta1 && meta2 
    //const estudadarMais = !!(meta1 ^ meta2) //bitwise xor
    const estudarMais= meta1 != meta2 
    const persistir = !contratado // operador unário (diferente)

    return { contratado, comemorar, estudarMais, persistir }
}

console.log(janeiro(true, true))
console.log(janeiro(true, false))
console.log(janeiro(false, true))
console.log(janeiro(false, false))