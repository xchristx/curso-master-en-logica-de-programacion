function repetir(texto, repetir){
    return texto.repeat(repetir)
}

console.log(repetir("hola",5))

String.prototype.repetir = function(num){

    let resultado = ""
    for (let i = 0; i < num; i++){

        resultado += this;

    }

    return resultado;

}

console.log("chao".repetir(5))