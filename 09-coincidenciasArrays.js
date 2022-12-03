function coincidenciasArrays (arr1, arr2){

    return  arr1.filter( (el) => (arr2.includes(el)) )
                .reduce( (acc,currentValue) =>{
                     if (acc.indexOf(currentValue)<0) acc.push(currentValue);
                     return acc;
                }, [])
}

console.log(coincidenciasArrays([4,5,6,8,6,7,5,6.2], [4,5,6]))