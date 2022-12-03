function escalera (num){

    let escalera = ""
    for (let i = 1; i <= num; i++){
        escalera += `${"[-]".repeat(i)}\n`
    }
    return escalera.slice(0,-1);
}

console.log(escalera(9))