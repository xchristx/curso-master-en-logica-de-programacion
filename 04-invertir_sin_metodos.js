function invertirStr(str){
    let palabraFinal = ""
    for (let i = str.length -1; i >= 0; i--){
        palabraFinal += str[i]
    }
    return palabraFinal;
}

console.log(invertirStr("Christian"))