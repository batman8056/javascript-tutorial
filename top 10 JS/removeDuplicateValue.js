

function removeDuplicateWord(values){
    let uniqueElement = [];
    for(let i =0; i <values.length; i++){
        if(uniqueElement.indexOf(values[i]) === -1){
            uniqueElement.push(values[i])
        }
    }
    return uniqueElement;
}

// function removeDuplicateWord(values){
//     return [...new Set(values)];
// }

console.log(removeDuplicateWord([1,2,2,1,4,6,7,4,7,8,9]))
