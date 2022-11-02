function checkPrime(number){
	let factor=0;
	for(let i=1; i<=number/2; i++){
		if(number %i == 0){
			factor++;
		}
	}
	
if(factor==2){
	return true;
}
return false;

}

let number =15;

let ans =checkPrime(number) ;
if(ans == true){
	console.log("prime");
}else{
	console.log("Not a Prime");
}