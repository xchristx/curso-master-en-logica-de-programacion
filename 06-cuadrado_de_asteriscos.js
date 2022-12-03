function cuadradoAsteriscos (num){
    let cuadrado = ""

    for (let i = 0; i < num; i++){
        cuadrado += "*"
    }

    cuadrado += "\n";

    for (let i = 0; i < num-2; i++){
        cuadrado += `*${" ".repeat(num-2)}*\n`
    }

    for (let i = 0; i < num; i++){
        cuadrado += "*"
    }
    
    return cuadrado;
}
console.log(cuadradoAsteriscos(20))