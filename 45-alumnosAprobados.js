function alumnosAprobados(alumnos) {
    let aprobados = 0;
    let reprobados = 0;
    for(let alumno of alumnos) {
        if(alumno.nota >=5){
            aprobados++;
        }else if (alumno.nota <5){
            reprobados++
        }
    }
    return `
    aprobados: ${aprobados}
    reprobados: ${reprobados}
    `
}
console.log(alumnosAprobados([{
    nombre : "juan",
    nota: 5
},
{
    nombre : "felipe",
    nota: 4
},
{
    nombre : "teresa",
    nota: 2
},
{
    nombre : "pedro",
    nota: 8
},{
    nombre : "javier",
    nota: 4
}]))