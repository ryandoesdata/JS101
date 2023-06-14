/* Function One

input: a number
output: an array
rules: the input number must be rational, the output array will be the denominators that are part of the egyptian fraction of that number
-----------------------------------------------------------
test cases are provided
-----------------------------------------------------------
data structures:
The Fraction object.
new Fraction(num)  takes a rational number and returns a fraction.
an empty array
a loop
-----------------------------------------------------------
algorithm:

loop while num > 0

if currentDenom is less than or equal to num:
num equals num - currentFrac
push currentDenom into array

raise currentDenom by 1

end loop

return array of denominators
-----------------------------------------------------------
notes:
This algorithm works because the currentDenom is increase by 1 for each loop.
using the Fraction object with currentDenom allows us to compare fractions
with 1 as the numerator to num, one at a time. if the currentFrac if less than or equal to num,
we know to push the currentDenom into our array.
we also reassign num to num minus currentFrac, in order to continue getting closer to 0,
at which point we have all the egyptian denominators in our array.
-----------------------------------------------------------
code:
*/

let Fraction = require("fraction.js");

function egyptian(num) {
  num = new Fraction(num);
  let currentDenom = 1;
  let denominators = [];

  while(num > 0) {
    let currentFrac = new Fraction(1, currentDenom);

    if (currentFrac <= num) {
      num = num.sub(currentFrac);
      denominators.push(currentDenom);
    }
    currentDenom += 1;
  }
  return denominators;
}

/* Function Two
input: an array
output: a number
rules: the output number is the sum of the egyptian fractions whose denominators make up the input array.
-----------------------------------------------------------
test cases are provided.
-----------------------------------------------------------
data structures:

the reduce method.
-----------------------------------------------------------
algorithm:

the input array calls the reduce method, which uses the Fraction object to add each egyption fraction together. It assigns the second argument to the denominator
of a new Fraction object, with 1 being the first argument of the Fraction. A second Fraction object with an argument of 0 is added as the initial value.
-----------------------------------------------------------
code:
*/

function unegyptian(arr) {
  return arr.reduce((accum, num) => accum + new Fraction(1, num), new Fraction(0)) 
}

console.log(unegyptian([ 1, 2, 7, 59, 5163, 53307975 ]));