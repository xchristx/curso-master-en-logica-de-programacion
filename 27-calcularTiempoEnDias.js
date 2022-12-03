function calcularTiempoEnDias(num){

    let anios = 0;
    let meses = 0;
    if (num > 364){
        anios = Math.floor(num/365);
        num = num % 365;
    }
    if (num > 29){
        meses = Math.floor(num/30);
        num = num % 30
    }
    return `${anios} años, ${meses} meses y ${num} dias`

};

console.log(calcularTiempoEnDias(30))

