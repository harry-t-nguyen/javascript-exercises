const palindromes = function (words) {
    words = words.replace(/[^\w\s\']|_/g, "")
                .replace(/\s+/g, " ");
    words = words.replaceAll(' ', '');
    words = words.toLowerCase();

    let reverseword = '';
    let splitword = words.split('');
    for (i=splitword.length - 1; i>=0; i--){
        reverseword+= splitword[i];
    };
    
    if (reverseword == words) {
        return true
    } else {
        return false
    };
};

// const palindromes = function(string) {
//     const processedString = string.toLowerCase().replace(/[^a-z]/g, "");
//     return (
//       processedString
//         .split("")
//         .reverse()
//         .join("") == processedString
//     );
// };
  

console.log(palindromes('A car, a man, a maraca.'));
console.log(palindromes('taC        os'));

// Do not edit below this line
module.exports = palindromes;
