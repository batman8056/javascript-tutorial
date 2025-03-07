

// check same letter present diffrent ward

function check(str1, str2){
    const sort1 = str1.split("").sort().join("");
    const sort2 = str2.split("").sort().join("");
    return sort1 === sort2;
}


console.log(check("listen", "silent"));