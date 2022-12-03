function mayusMinus(str){
	
	  let mayus =0;
	  let minus =0;
	
	  for(let i = 0; i < str.length;i++){
	  	
	  	   if (str[i].charCodeAt()>64 && str[i].charCodeAt()<91){
	  	   	mayus++;
	  	   }else if (str[i].charCodeAt()>90 && str[i].charCodeAt()<123) minus++;
	  	   	
	  }
	  
	  if (mayus>minus){
	  	return str.toUpperCase();
	  }else if(mayus<minus){ return str.toLowerCase();}else return str;
	  
}
console.log(mayusMinus("HOla"))
