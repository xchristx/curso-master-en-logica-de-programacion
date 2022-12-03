function nMayor(num,num2){
	let result = (num>num2)?`${num} es mayor ${num2}`:(num<num2)?`${num2} es mayor ${num}`:(num2===num)?`iguales`:`no son numeros`
	return result;
}
console.log(nMayor(2,2.5))