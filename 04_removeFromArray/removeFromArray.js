const removeFromArray = function(array, ...removeitems) {
    let position;
    //Loop through the items that needs to be removes

    for (i=0; i<removeitems.length; i++){
        //find the position of the remove items
        position = array.indexOf(removeitems[i])

        //remove only when items found in the array
        if (position != -1){
            array.splice(position,1)
        }
        }
    return array;
    }

/* Solutions from Odin 

// we have 2 solutions here, an easier one and a more advanced one.
// The easiest way to get an array of all of the arguments that are passed to a function
// is using the rest operator. If this is unfamiliar to you look it up!
const removeFromArray = function (...args) {
  // the very first item in our list of arguments is the array, we pull it out with args[0]
  const array = args[0];
  // create a new empty array
  const newArray = [];
  // use forEach to go through the array
  array.forEach((item) => {
    // push every element into the new array
    // UNLESS it is included in the function arguments
    // so we create a new array with every item, except those that should be removed
    if (!args.includes(item)) {
      newArray.push(item);
    }
  });
  // and return that array
  return newArray;
};

// A simpler, but more advanced way to do it is to use the 'filter' function,
// which basically does what we did with the forEach above.

// var removeFromArray = function(...args) {
//   const array = args[0]
//   return array.filter(val => !args.includes(val))
// }
// 

*/
// Do not edit below this line
module.exports = removeFromArray;
