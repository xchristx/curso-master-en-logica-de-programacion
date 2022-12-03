function coincidencias(frase, palabra){
    
    return frase.toLowerCase()
                .replace( /[.,!¿?"']/gi, "" )
                .split(" ")
                .filter( (el) => el === palabra )
                .length

}
console.log(coincidencias("hola, idioma caracter hola!! victor victor robles hola!!", "victor"))

module.exports = coincidencias;