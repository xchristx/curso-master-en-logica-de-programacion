function numAleatorio(min,max) {
    return Math.round(Math.random() * (max-min) + min)
}
console.log(numAleatorio(2,6))