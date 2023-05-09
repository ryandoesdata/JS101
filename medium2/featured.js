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
function featured(int) {
  if (int > 987654321) {
    return "There is no possible number";
  }
  function isFeatured(num) {
    let sortedArr = String(num).split('').sort((a, b) => a - b);

    return ((sortedArr.filter((num, index) => num[index] === num[index + 1])));
  }
  while (true) {
    if (isFeatured(int)) {
    return int;
    } else {
      int += 7;
    }
  }
}


//console.log((['a', 'b', 'c', 'c'].filter((num, index) => num === num[index + 1])));
console.log(featured(19877));