function invertirEntero (num){

    return parseInt(String(num).split("").reverse().join(""))*Math.sign(num)

}
console.log(invertirEntero(-1007))