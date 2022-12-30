const reverseString = function(word) {
    let reverseword = '';
    let splitword = word.split('');
    for (i=splitword.length - 1; i>=0; i--){
        reverseword+= splitword[i];
    }
    return reverseword
};

/* solution from Odin*/
// const reverseString = function(string) {
//     return string.split('').reverse().join('');
//    };

module.exports = reverseString;
