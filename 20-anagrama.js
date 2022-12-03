function anagramas(str, str2){
	
	return cleaner(str)===cleaner(str2);
};
function cleaner(str){
	
	return str.replace(/[^\w]/gi,"")
	          .split("")
	          .sort()
	          .join("")
	          .toLowerCase();
}

console.log(anagramas("ser?gio","riesgo"))