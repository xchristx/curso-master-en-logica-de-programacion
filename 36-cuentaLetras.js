function cuentaLetras(string) {
    const textoLimpio = string.replace(/[^aáAÁeéEÉiíIÍoOóÓuúUÚ\w]/gi, "").replace(/[\d]/gi,"")
    console.log(textoLimpio)
    let vocales = 0;
    let consonates =0;
    for (const letter of textoLimpio) {
        if(/[aáAÁeéEÉiíIÍoOóÓuúUÚ]/gi.test(letter)){
            vocales++
        } else consonates++
    }
    return `
    vocales: ${vocales}
    consonates: ${consonates} `
}

console.log(cuentaLetras("Aáéíóóígghjgo"))