/* understand the problem
input: 
function 1: two numbers
function 2: an array

output:
function 1: an array
function 2: a number

rules: 
function 1:
function 1 takes two numbers as arguments. The first is a numerator, the second is the denominator.
The output of function 1 is an array of denominators of an egyptian fraction
The egyptian fraction is comprised of unit fractions. All the numerators will be 1.

function 2:
function 2 takes the array from function1 as an argument and adds all the unit fractions together,
outputing a rational number.
*/

let Fraction = require("fraction.js");

function egyptian(targetValue) {
  let denominators = [];
  let unitDenominator = 1;
  while (targetValue > 0) {
    let unitFraction = new Fraction(1, unitDenominator); // unitFraction = 1/1
    if (unitFraction <= targetValue) {  // 1/1 < 2/1 true // 1/4 < 1/6 false
      targetValue = targetValue.sub(unitFraction); // targetValue = 2/1 - 1/1. targetValue = 1/1. 1/1 - 1/2. targetValue = 1/2 - 1/3 = 1/6
      denominators.push(unitDenominator); // denominators = [1, 2, 3, 6]
    }
    unitDenominator += 1; // unitDenominator = 2
  }
  //console.log(x.sub(y));
  return denominators; // [1, 2, 3, 6]
}

function unegyptian(denominators) { // [1, 2, 3, 6]
  return denominators.reduce(
    (accum, num) => accum + new Fraction(1, num), new Fraction(0)
  ); // starting at 0, 1/1 + 1/2 + 1/3 + 1/6
}

console.log(egyptian(new Fraction(3, 100)));