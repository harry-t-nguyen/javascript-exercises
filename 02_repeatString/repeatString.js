
const repeatString = function(word,x) {
    let result ='';
    if (x<0){
        return result = "ERROR"
    } else {
        for (i=0; i<x; i++){
            result+=word
        }
        return result
    }
};

// let result = repeatString('hello',10);
// console.log(result);

// Do not edit below this line
module.exports = repeatString;
