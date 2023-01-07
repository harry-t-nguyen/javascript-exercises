const fibonacci = function(number) {
    let a = 0;
    let b = 1;
    let result;

    number = number*1;
    if (number < 0) {
        return "OOPS";
    };
    if (number == 1){
        return result = 1;
    }

    // number - 2 is because the first 2 numbers have been declared. So need to loop 2 times less
    for (let i=0; i<=number-2; i++){
        result = a+b;
        a = b;
        b = result;
    }
    return result;
};


// const fibonacci = function(count) {
//     if (count < 0) return "OOPS";
//     if (count === 0) return 0;
//     let a = 0;
//     let b = 1;
//     for (let i = 1; i < count; i++) {
//       const temp = b;
//       b = a + b;
//       a = temp;
//     }
//     return b;
// };



// Do not edit below this line
module.exports = fibonacci;
