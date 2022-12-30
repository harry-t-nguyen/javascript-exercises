const reverseString = function(word) {
    let reverseword = '';
    let splitword = word.split('');
    for (i=splitword.length - 1; i>=0; i--){
        reverseword+= splitword[i];
    }
    return reverseword
};

console.log(reverseString('hello world'));

// let test = '';
// let word = "abc de";
// let substring = word.split('');

// test += substring[5];
// console.log(test);
// console.log(substring[5]);

// console.log(substring.length);
// Do not edit below this line
module.exports = reverseString;
