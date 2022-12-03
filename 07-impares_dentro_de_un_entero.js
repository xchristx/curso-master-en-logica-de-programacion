function contarImpares(num){
    
    let counter = 0;

    for (i = 0; i <= num; i++){
       counter = (i % 2 != 0) ? counter += 1: counter;
    }
    return counter;

}
console.log(contarImpares(101))