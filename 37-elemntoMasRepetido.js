function elementoMasRepetido(param) {

    let map = {};

    if(Array.isArray(param)){
        param = param.join("")
    }

    param = param.trim()

    for (const letter of param) {
        if (!map[letter]){
            map[letter] = 1;
        }else{
            map[letter]++
        }
    }
    let mayor = []
    Object.entries(map).forEach(([clave,valor])=>{
        if (!mayor[0] || valor > mayor[0][1]){
            mayor = [[clave, valor]]
        }else if (valor == mayor[0][1]){
            mayor.push([clave, valor])
        }
    })
    if (mayor.length<2){
        return `carater más repetido '${mayor[0][0]}' ${mayor[0][1]} veces`
    }else{
        let caracteres = mayor.reduce((acc,b)=> acc +" "+ b[0],"")

        return `Caractermes mas repetidos : "${caracteres}" ${mayor[0][1]} veces cada uno`
    }

}
console.log(elementoMasRepetido([" ", "saaddee,ff"]))