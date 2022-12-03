function divisores(num){

    let textoImprimir = `Los divisores de ${num} son:\n`;

    for (let i=0; i<=num; i++){
        if (num%i === 0) textoImprimir += i.toString() +", ";
        if (i === num){ textoImprimir = textoImprimir.slice(0,-2)};
    }
    return textoImprimir;
}

console.log(divisores(7))