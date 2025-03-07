

function factorialNum(num){
    let factnum = 1;
    for(let i = 1; i <= num; i++){
        factnum *= i;
    }
    return factnum;

}

console.log(factorialNum(5))//1*2*3*4*5=120