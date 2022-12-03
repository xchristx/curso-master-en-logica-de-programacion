function capitalize(str){
	 
	 return str.split(" ")
	           .map( (el)=>{
	           	el = el[0].toUpperCase()+el.slice(1);
	           	return el;
	           } ).join(" ")
	
};
console.log(capitalize("hola mundo del ssd con ?kwl"));
