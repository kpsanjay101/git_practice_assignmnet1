function isPrime(number){

	for(let i=1; i<=number/2; i++){
		if(number %2 == 0){
			fact++;
		}
	}
	return fact;
}

let number "15";

let ans = isPrime(number);
if(ans == 2){
	console.log("Not Prime");
}else{
	console.log("Prime");
}