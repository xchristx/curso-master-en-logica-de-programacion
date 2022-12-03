function agruparArrays(arr,numElements){

    const arrAux = []
        let index = -1
        let subIndex = -1;
        for (let i = 0; i < arr.length; i += numElements){
            arrAux.push([])
            index += 1;
            for (let j = 0; j < numElements; j++){
                
                subIndex += 1;
                arrAux[index].push(arr[subIndex]);

            }
        }
        arrAux[arrAux.length -1] = arrAux[arrAux.length -1].filter( (el) => el != undefined )
    return arrAux;
}
console.log(agruparArrays([2,5,3,6,4,8,2,2,5,5,5],3))

function agruparVictorRobles (arr, numElements){

    let finalArr = [];
    for (element of arr){

        let lastItem = arr[arr.length -1];

        if (!lastItem || lastItem.length == numElements){

            finalArr.push([element]);

        }else lastItem.push(element)
    }

}