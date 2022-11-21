let ages = {
  Herman: 5,
  Lily: 1,
  Grandpa: 1,
  Eddie: 1,
  Marilyn: 1,
  Spot: 1
};

/*
let ageArray = Object.values(ages);
let index = 0;
let ageSum = 0;

while (index < ageArray.length) {
  ageSum += ageArray[index];

  index += 1;
}

console.log(ageSum);
*/

// method solutions

/*

let totalAges = 0;
Object.values(ages).forEach(age => totalAges += age);

console.log(totalAges);

*/

Object.values(ages).reduce((agesSum, currAge) => agesSum + currAge, 0); // 6174