// the number only divisible by 1 and itself
function isPrime(num){
    for(let i =2; i< num/2; i++){
        if(num % i === 0){
            return false;
        }
    }
    return true;
}

console.log(isPrime(5))