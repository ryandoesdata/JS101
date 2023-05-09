/* understand the problem
input: a number
output: asterisks logged to the console.

rules: the input number represents both the amount of times the output is logged to the console
and the amount of asterisks at the middle point.
input will always be an odd number.

examples are provided

data structures:
a loop to iterate through the input number
a console log statement within the loop

algorithm:
initialize a variable for Math.floor(input / 2), "whitespaces"
start with one asterisk after whitespaces
for each iteration add two asterisks and subtract one whitespace from whitespaces
use repeat for the whitespaces
loop until the midpoint is reached, so stopping condition will be Math.ceil(input/2)
once midpoint is reached, start another loop to console.log...

no, you can use one loop with two if statements. one if the increment is less than Math.floor(input / 2)
then another for after

code: */

function diamond(num) {
  let midpoint = Math.ceil(num / 2);
  let whitespace = Math.ceil(num / 2) - 1;
  let stars = 1;

  for (let i = 1; i <= num; i += 1) {
    if (i < midpoint) {
      console.log(`${" ".repeat(whitespace)}${"*".repeat(stars)}`);
      whitespace -= 1;
      stars += 2;
    } else {
      console.log(`${" ".repeat(whitespace)}${"*".repeat(stars)}`);
      whitespace += 1;
      stars -= 2;
    }
  }
}

diamond(47);