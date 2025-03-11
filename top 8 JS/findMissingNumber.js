const findMissingNumbers = (arr) => {
    let missingNumbers = [];
    let min = Math.min(...arr);//spread operator (...) to convert the array into a list of arguments (1, 7, 4, 6, 2, 9) → 1
    let max = Math.max(...arr);
    
    for (let i = min; i <= max; i++) {
        if (!arr.includes(i)) { // ! mean mention if not presented in array will it is true
            missingNumbers.push(i);
        }
    }
    return missingNumbers;
};

// Example
console.log(findMissingNumbers([1, 7, 4, 6, 2, 9]));  // Output: [3, 5, 8]