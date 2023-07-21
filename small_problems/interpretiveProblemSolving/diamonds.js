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

/*
input: a number
output: console.log a variable number of asterisks
rules: the output will be as long and as wide (at the middle) as the input number.
----------------------------------------------------------------------------

Test cases are provided

diamond(9);
logs
    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *

diamond(3);
logs
 *
***
 *
----------------------------------------------------------------------------

data structures:
a loop that logs a changing row of asterisks to the console.
----------------------------------------------------------------------------

algorithm:
variable for half: math.floor num / 2

the first line will always have one asterisk after halfway.floor of num
the next will have two more asterisks with one less whitespace

so on until math.ceil num / 2. print num asterisks.

print bottom half using half as an argument
----------------------------------------------------------------------------

code:

function diamond(lines) {
  let half = Math.floor(lines / 2);
  
  function topHalf(half) {
    let spaces = half;
    let j = 1;
    while (spaces >= 1) {
      console.log(`${" ".repeat(spaces)}${*.repeat(j)}`);
      spaces -= 1;
      j += 2;
    }
  }

  function bottomHalf(half) {
    let spaces = 1;
    let j = lines - 2;
    while (spaces <= half) {
      console.log(`${" ".repeat(spaces)}${*.repeat(j)}`);
      spaces += 1;
      j -= 2;
    }
  }

    topHalf(half);
    console.log(*.repeat(lines));
    bottomHalf(half);
}

diamond(9);


function diamond(lines) {
  let half = Math.floor(lines / 2);
  
  function topHalf(half) {
    let spaces = half;
    let j = 1;
    while (spaces >= 1) {
      console.log(`${" ".repeat(spaces)}${*.repeat(j)}`);
      spaces -= 1;
      j += 2;
    }
  }

  function bottomHalf(half) {
    let spaces = 1;
    let j = lines - 2;
    while (spaces <= half) {
      console.log(`${" ".repeat(spaces)}${*.repeat(j)}`);
      spaces += 1;
      j -= 2;
    }
  }

    topHalf(half);
    console.log(*.repeat(lines));
    bottomHalf(half);
}

diamond(9);

*/

function diamond(lines) {
  let half = Math.floor(lines / 2);
  
  function points(half) {
    console.log(`${" ".repeat(half)}*`)
  }

  function topHalf(half) {
    let spaces = half - 1;
    let j = 1;
    while (spaces >= 1) {
      console.log(`${" ".repeat(spaces)}*${" ".repeat(j)}*`);
      spaces -= 1;
      j += 2;
    }
  }

  let middle = lines => console.log(`*${" ".repeat(lines - 2)}*`);

  function bottomHalf(half) {
    let spaces = 1;
    let j = lines - 4;
    while (spaces < half) {
      console.log(`${" ".repeat(spaces)}*${" ".repeat(j)}*`);
      spaces += 1;
      j -= 2;
    }
  }

  points(half);
  topHalf(half);
  middle(lines);
  bottomHalf(half);
  points(half);

}

diamond(11);