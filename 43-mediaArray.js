function promedioArray(arr) {
    return arr.reduce((acc,current)=>acc+current)/arr.length
}
console.log(promedioArray([2,2,2,56,8,9,12,15,17,65,3,2,89,651,321,65,15.86]))