function recortarStr(str,limit){

    if (typeof(str) === "string" && typeof(limit)=== "number"){
        return str.substring(0,limit);
    }else return "Datos invalidos!!"
}
console.log(recortarStr("hola paola",2))