function eliminarDuplicados (arr){

    return arr.filter( (el,i)=> {if(typeof(el)=== "number" && arr.indexOf(el) === i) return el;});

}

let arr = ["hola",2,6,2,60,6,5,5,4,"chao"]
console.log(eliminarDuplicados(arr))