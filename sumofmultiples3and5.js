//Sum Of Multiples 3 and 5
//-------------------------
// multiples of 3:3,6,9
// multiples of 5:5,10

const sum=(limit)=>{
    let sum = 0;
    for(let i=0; i<=limit; i++)
      if(i % 3 === 0 || i % 5 ===0)
        sum += i;

    return sum;
}

const number = 10;
console.log(sum(number));