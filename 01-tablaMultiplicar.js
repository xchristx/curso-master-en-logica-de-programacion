function tablaDeMultiplicar (num){

    let tabla = `Tabla del # ${num}\n\n`
    for (let i = 0; i < 11; i++){
        tabla += `${i} * ${num} = ${i*num} \n`
    }
    
    return tabla.slice(0,-1);
}
console.log(tablaDeMultiplicar(12))