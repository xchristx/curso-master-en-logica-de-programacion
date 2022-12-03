function verificarPalindromo(str){
    const verif = str.split("").reverse().join("").toLowerCase()
    return verif === str.toLowerCase();
}
console.log(verificarPalindromo("otto"))

module.exports = verificarPalindromo;