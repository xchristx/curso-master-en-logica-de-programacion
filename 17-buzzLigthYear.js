function BuzzLigthyear(num){

    let finalStr = "0\n";
    for (let i = 1; i <= num; i++){

        if(i % 3 === 0 && i % 5 ===0) finalStr += `Buzz Ligthyear\n`;
        else if (i % 3 === 0)  finalStr += `Buzz\n`;
        else if (i % 5 === 0)  finalStr += `Ligthyear\n`;
        else finalStr += `${i}\n`;
    }

    return finalStr;
}

//console.log(BuzzLigthyear(20))

//funcion testeable

function buzz(num){

    let finalStr = "";
    if(num % 3 === 0 && num % 5 ===0) finalStr = `Buzz Ligthyear\n`;
    else if (num % 3 === 0)  finalStr = `Buzz\n`;
    else if (num % 5 === 0)  finalStr = `Ligthyear\n`;
    else finalStr += `${num}\n`;

    return finalStr;
}

function buzzImprimir (num){

    let impresion = "0\n"
    for (let i = 1; i <= num; i++){
        impresion += `${buzz(i)}`;
    }
    
    return impresion;
}

console.log(buzzImprimir(15))