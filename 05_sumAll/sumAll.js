const sumAll = function(a,b) {
    let sum = 0;
    if (typeof a != 'number' || typeof b !=  'number'){
        return "ERROR"
    } else if ( a < 0 || b < 0){
        return "ERROR"
    } else {
        if (a < b){
            for (i=a; i<=b; i++){
            sum += i;
            }
        } else {
        for (x=b; x<=a; x++){
            sum += x;
        } 
    }
    return sum;
    }

        // console.log(typeof a)
        // console.log(typeof b)
        // console.log(Number.isInteger(a))
        // console.log(Number.isInteger(b))
}


// console.log(sumAll(1,4))

//Do not edit below this line
module.exports = sumAll;
