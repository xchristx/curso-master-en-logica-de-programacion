function censurarPalabra(texto = false, palabra = false){
    palabra = palabra.toLowerCase()
    if (!texto && !palabra) return "No se puede realizar la operación si no se ha defido el texto y la palabra a censurar";
    else if (!texto || !palabra) return "Texto o palabra a censurar sin definir";
    else return texto.toLowerCase()
                     .replace( /[.,!?¿|]/gi, "" )
                     .split(" ")
                     .map( (el) =>{
                         if (el === palabra) return "[-CENSURADO-]"; else return el;
                         } )
                     .join(" ")

}

console.log(censurarPalabra("hola palindromo ojo palindromo pero peroo", "palindromo"))


function censurarPalabra2(texto2 = false, palabra2 = false){
    palabra2 = palabra2.toLowerCase()
    if (!texto2 && !palabra2) return "No se puede realizar la operación si no se ha defido el texto y la palabra a censurar";
    else if (!texto2 || !palabra2) return "Texto o palabra a censurar sin definir";
    else return texto2.toLowerCase()
                     .replace( new RegExp(palabra2, 'gi'), "[-CENSURADO-]" )

}
console.log(censurarPalabra2("hola palindromo ojo palindromo pero peroo", "palindromo"))
