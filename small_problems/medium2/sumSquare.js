/* 

understand the problem
input: a number
output: a number

rules: the input number is the difference between the square sum of the first count of positive integers
and the sum of the squares of the first count positive integers


examples are provided


data structures:  
.reduce for each of the integers leading up to the argument.

.map to make an array of the integers, or forEach to compute the two numbers before subtracting.

two placeholders to subtract the final totals.


algorithm:
declare the two placeholders.

use .map to make an array of all the integers leading up to the argument

assign both placeholders using reduce for the first, squaring the total,
and reduce with Math.sqrt(currentValue) for the second.

subtract the first placeholder from the second.

*/

function sumSquareDifference(num) {
  let value1;
  let value2;
  let numArr = [];

  while (num > 0) {
    numArr.push(num);
    num -= 1;
  }

  value1 = (numArr.reduce(
    (accum, currentVal) => accum + currentVal,
    0
  ) ** 2);

  value2 = numArr.reduce(
    (accum, currentVal) => accum + (currentVal ** 2),
    0
  );

  console.log(value1 - value2);
}

sumSquareDifference(3);      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
sumSquareDifference(10);     // 2640
sumSquareDifference(1);      // 0
sumSquareDifference(100);    // 25164150