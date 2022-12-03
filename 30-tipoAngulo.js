function tipoAngulo(grados){

    if(typeof(grados) !== "number") return "ingresar solo valores numericos";
    if(grados > 360) return "Angulo fuera de rango"

    switch(true){
        case grados === 0: return "Angulo nulo";
        case grados === 360: return "Angulo completo"
        case grados === 180: return "Angulo LLano";
        case grados === 90: return "Angulo recto";
        case grados<90&&grados<180: return "Angulo agudo";
        case grados>90&&grados<180: return "Angulo obtuso";
        case grados > 180: return "Angulo Concavo";
        case grados < 180: return "Angulo convexo";
    }
}

console.log(tipoAngulo(80))
console.log(tipoAngulo(350))