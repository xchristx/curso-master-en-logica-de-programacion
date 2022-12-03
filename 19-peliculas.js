function peliculas (arr){

    let vistos = `Peliculas vistas: \n`;
    let noVistos = `Peliculas por ver: \n`;
    
    arr.forEach(element => {
        if (element.visto) {
            vistos += element.titulo + "\n";
        }else{
            noVistos += element.titulo + "\n";
        }
    });
    return vistos + noVistos
}

let pelis = [{"titulo" : "señor de los anillos", "director": "hanna", "visto": true},
             {"titulo" : "señor de los anillos2", "director": "hanna", "visto": false},
             {"titulo" : "señor de los anillos3", "director": "hanna", "visto": false},
             {"titulo" : "batman", "director": "hanna", "visto": true}];
console.log(peliculas(pelis))