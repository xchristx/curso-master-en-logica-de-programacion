class Hora {
    constructor() {
        this.horaActual = new Date();
        this.encendido = false;
        this.hora = this.horaActual.getHours();
        this.minutos = this.horaActual.getMinutes();
        this.segundos = this.horaActual.getSeconds();
    }
    actualizar(){
        this.segundos++;
        if (this.segundos > 59){
            this.minutos++
            this.segundos = 0;
        }
        if(this.minutos > 59){
            this.hora++;
            this.minutos = 0;
        }
        if (this.hora > 23){
            this.hora = 0;
        }
    }
    encender (){
        setInterval( ()=>{
            this.actualizar();
            console.log(`${this.hora}:${this.minutos}:${this.segundos}`)
        },1000),this
    }
}
a = new Hora;
a.encender();
//a.actualizar()