function masDeDosStrings(arr) {
    return arr.filter((el)=>{
        if(el.match(/[\w][\s][\w]/)){
            return el
        }
    })
}
console.log(masDeDosStrings(["hola asdas", "asds", "asdassdfsdsdf", " "]))