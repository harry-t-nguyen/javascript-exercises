const leapYears = function(x) {
    if (x % 4 == 0){
        if (x % 400 == 0){
            return true
        } else if (x % 100 == 0){
            return false
        } else return true
    } else {
        return false
    }

};
/* Solution from Odin
const leapYears = function(year) {
    return year % 4 === 0 && ( year % 100 !== 0 || year % 400 === 0);
  };
*/


// Do not edit below this line
module.exports = leapYears;
