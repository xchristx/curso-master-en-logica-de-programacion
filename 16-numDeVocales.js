function numeroDeVocales (str){
    
    let counter = 0;
    str.replace(/[s+]g/,"")
       .split("")
       .filter( (el)=> {
        if("aeiouáéíóú".includes(el.toLowerCase())) counter++;
       });
    
    return counter;

}
console.log(numeroDeVocales("plñoió"))

//La manera de victor
function vocales(str) {

    let coincidencias = str.match(/[aeiouáéíóú]/gi)
    return coincidencias ? coincidencias.length : 0;

}
console.log(vocales("hhhhhgggjlo"))