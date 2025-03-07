
function largestNumber(values) {
    let largest = values[0];
    for (let i = 0; i < values.length; i++) {
        if (values[i] > largest) {
            largest = values[i];
        }
    }
    return largest;
}

console.log(largestNumber([2,5,7,2,6,9]));