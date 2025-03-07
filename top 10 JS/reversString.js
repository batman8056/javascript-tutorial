


function reversString(str){
    let reversed= "";
    for(let i = str.length-1; i >= 0; i--){
        reversed += str[i];
    }
    return reversed
}

// function reversString(str){
//     return str.split("").reverse().join("");
// }

console.log(reversString("hello world"));

// i Value	str[i]	reversed (after iteration)
// 4	    'o'	    "o"
// 3	    'l'	    "ol"
// 2	    'l'	    "oll"
// 1	    'e'	    "olle"
// 0	    'h'	    "olleh"