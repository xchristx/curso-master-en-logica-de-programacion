function tablaReductoraEn8 (num){

    let list8 = `--- Del ${num} hasta 0 ---\n`;

    for (var i = num ; i >= 0; i-= 8){
        list8 += `nº ${i}\n`
    }

    if (num % 8 != 0){list8 += "nº 0\n"}

    list8 += '--- FIN ---'
    return list8;
}
console.log(tablaReductoraEn8(109))