// //maximum of three number
let num1 =12;
let num2 =11;
let num3 =13;

//arrow function using ternary operator to find max three number
const max =(num1,num2,num3) =>  (num1 > num2) ? (num2 > num3 ? num2:num3) : (num1 > num3 ? num1:num3);


console.log(max(num1,num2,num3));





