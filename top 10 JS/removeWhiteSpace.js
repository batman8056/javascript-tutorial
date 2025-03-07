
function removeWhiteSpace(str){
    let removeSpace= "";
    for(let i = 0; i < str.length; i++){
        if(str[i] !== " "){
            removeSpace +=str[i];
        }
    }
    return removeSpace;
}


console.log(removeWhiteSpace("what,  are,     u,         doing"));

