function permutacion (arr,num){
	
	  if(arr.length!== num) return false;
	  let j=0;
	  
	  for (let i = arr[0];i<(num+arr[0]);i++){
	  	  if (arr[j]!==i) return false;
	  	  j++;
	  	
	  }
	  return true;
	  
}

console.log(permutacion([50,51,52,53],4))