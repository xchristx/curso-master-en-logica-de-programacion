function stringMasRepetida (str){

    if (!str) return "Sin entrada";
    

    str = String(str).replace(/\s+/g, '')

    let mapeo = {}

    for (letter of str){

        if ( mapeo[letter]){
            mapeo[letter]++;
        }else mapeo[letter] = 1;
    }

    let sorted = Object.entries(mapeo).sort((prev, curr)=>(prev[1]>curr[1])?-1:1)
      
    let max = sorted.filter(  (el) => (el[1] == sorted[0][1]))
    
    let mensaje = ""

    if (max.length > 1){
        const cantLtras = []
        max.forEach( (element) => cantLtras.push( element[0]))
        mensaje += `Los caracteres más repetidos son "${cantLtras}" que han sido repetidos ${max[0][1]} veces cada uno`
    }else mensaje += `El caracter más repetido es: ${max[0][0]}, que ha sido repetido ${max[0][1]} veces`

    return mensaje;
}

console.log(stringMasRepetida("Hola aa eeee iii"))
