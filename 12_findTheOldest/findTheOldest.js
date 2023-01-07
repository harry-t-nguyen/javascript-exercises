const people = [
    {
      name: "Carly",
      yearOfBirth: 1066,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]

const findTheOldest = function(people) {
    let oldestage = 0;
    let oldestperson;
    people.forEach((person)=>{

        //if there is yearOfDeath key in person object
        if ('yearOfDeath' in person){
            if (person.yearOfDeath - person.yearOfBirth > oldestage){
                oldestage = person.yearOfDeath - person.yearOfBirth;
                oldestperson = person;
            };
        //if there is no yearOfDeath key in person object
        } else {
            person["yearOfDeath"] = new Date().getFullYear();
            if (person.yearOfDeath - person.yearOfBirth > oldestage){
                oldestage = person.yearOfDeath - person.yearOfBirth;
                oldestperson = person;
            };
        }

    });
    return oldestperson;
};


// const findTheOldest = function(array) {
//   return array.reduce((oldest, currentPerson) => {
//     const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
//     const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
//     return oldestAge < currentAge ? currentPerson : oldest;
//   })
// };

// const getAge = function(birth, death) {
//   if (!death) {
//     death = new Date().getFullYear();
//   }
//   return death - birth;
// };


console.log(findTheOldest(people));

// Do not edit below this line
module.exports = findTheOldest;
