function verificarPalindromo(str){
    const verif = str.split("").reverse().join("")
    return verif === str;
}
console.log(verificarPalindromo("otto"))