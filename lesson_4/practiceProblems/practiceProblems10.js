let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

let ageArray = Object.values(ages);
let youngest = {};
let index = 1;
let currentAge = ageArray[0];

while (index < ageArray.length) {
  if ((currentAge / ageArray[index]) > 1) {
    currentAge = ageArray[index];
  }
  index += 1;
}

console.log(currentAge);