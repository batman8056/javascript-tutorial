

function reverseString(str){
    reversString= "";
    for(let i = str.length-1; i>=0; i--){ //untill false loop can be run
            reversString +=str[i];
    }
    return reversString;
}




console.log(reverseString("hello")); 