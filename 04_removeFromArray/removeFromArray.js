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

console.log(removeFromArray([1,2,3,4,5,6], 5, 6))
// Do not edit below this line
module.exports = removeFromArray;
