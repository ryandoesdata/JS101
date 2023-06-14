/* eslint-disable indent */
/* eslint-disable max-len */
/* understand the problem
input: a number
output: a number

rules:
The output number is the next featured number greater than the integer argument.
A featured number is an odd number that is a multiple of 7 with all the digits occuring just once.

Examples: 7, 21, 35...

Data structures:
a loop incrementing featured numbers upwards. with a counter to mark the current number.
stopping condition to return the current number once it's greater than the argument.
an if statement for the largest possible featured number.

algorithm:

*/
function featured(number) {
  const MAX_FEATURED = 9876543201;
  let featuredNum = toOddMultipleOf7(number);

  do {
    if (allUnique(featuredNum)) {
      return featuredNum;
    }

    featuredNum += 14;
  } while (featuredNum <= MAX_FEATURED);

  return 'There is no possible number that fulfills those requirements.';
}

function toOddMultipleOf7(number) {
  do {
    number += 1;
  } while (number % 2 === 0 || number % 7 !== 0);

  return number;
}

function allUnique(number) {
  let digits = String(number).split('');
  let seen = {};

  for (let idx = 0; idx < digits.length; idx += 1) {
    if (seen[digits[idx]]) {
      return false;
    }

    seen[digits[idx]] = true;
  }

  return true;
}


//console.log((['a', 'b', 'c', 'c'].filter((num, index) => num === num[index + 1])));
console.log(featured(19877));