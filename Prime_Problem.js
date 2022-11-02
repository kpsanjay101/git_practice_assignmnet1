function isPrime(number){
    let fact = 0; 
	for(let i=1; i<=number/2; i++){
		if(number %i == 0){
			fact++;
		}
	}
	return fact;
}

let number = 15;

let ans = isPrime(number);
if(ans == 2){
	console.log("Prime");
}else{
	console.log("Not a Prime");
}