function arrayCuadrado(arr){
    return arr.filter(el=> typeof(el)==="number")
              .map(el => el*el);
}
console.log(arrayCuadrado(["hola",2,6,7,9,90]))