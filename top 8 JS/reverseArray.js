// const reverseArray = (arr) => {
//     const reversed = [];
//     for (let i = arr.length - 1; i >= 0; i--) {
//         reversed.push(arr[i]);
//     }
//     return reversed;
// };

const reverseArray = (arr) =>{
    const reverseNumber = [];
    for(let i =arr.length -1; i>= 0; i--){
        reverseNumber.push(arr[i])
    }
    return reverseNumber;
}
// Example
console.log(reverseArray([1, 2, 3, 4, 5]));  // Output: [5, 4, 3, 2, 1]