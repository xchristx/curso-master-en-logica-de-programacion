function valorAltoY_bajo(arr) {
    let valores = arr.sort((a,b)=> a-b)
    return `
    valor mas alto: ${valores[valores.length-1]}
    valor mas bajo: ${valores[0]} `
}
console.log(valorAltoY_bajo([1,2,3,6,5,2]))