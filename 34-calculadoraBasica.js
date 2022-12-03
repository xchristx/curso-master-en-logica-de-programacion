function calculadora(num1, num2) {
    try {
        if (!isNaN(num1) && !isNaN(num2)){
            return `la suma de ambos numeros es: ${num1 + num2}\nla resta de ambos numeros es: ${num1-num2}\nla multiplicación de ambos numeros es: ${num1*num2}\nla divicion de ambos numeros es: ${num1/num2}\n`
        }else throw Error("Ingresar solo numeros")
    } catch (error) {
        console.error(error);
    }
}
console.log(calculadora(5,6))