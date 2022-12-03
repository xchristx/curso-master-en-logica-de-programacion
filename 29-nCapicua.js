function nCapicua(n){

    let cap = String(n).split("")
                       .reverse()
                       .join("");
    if (cap === String(n))return true;
    else return false;

}
console.log(nCapicua(2002))