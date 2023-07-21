/* understanding the problem
input: a number
output: a series of asterisks spaced out a certain length.

rules: 
input (n) will always be an odd number.
minimum number is 7.
middle row will contain n stars with no spaces
rows surrounding middle contain three stars and Math.floor((n / 2) - 1) spaces


examples are provided

data structure:
variables for spaces and stars
a loop to adjust the stars inward
a middle statement
a loop to adjust the stars outward.

algorithm:
variables for spaces and stars
loop starting at Math.floor(n / 2), until 1, increment down by 1.
a middle statement logging n amount of stars
loop starting at 1, until Math.floor(n / 2), increment up by 1.

use template literals to adjust the spaces and stars accordingly.

code:
*/

function star(n) {

  let j = 0;
  let k = Math.floor(n / 2) - 1;

  for (let i = Math.floor(n / 2); i >= 1; i -= 1) {
    console.log(`${' '.repeat(j)}*${' '.repeat(k)}*${' '.repeat(k)}*${' '.repeat(j)}`);
    j += 1;
    k -= 1;
  }

  console.log('*'.repeat(n));

  k = 0;
  j = Math.floor(n / 2) - 1;

  for (let i = Math.floor(n / 2); i >= 1; i -= 1) {
    console.log(`${' '.repeat(j)}*${' '.repeat(k)}*${' '.repeat(k)}*${' '.repeat(j)}`);
    j -= 1;
    k += 1;
  }
}

star(19);

function stars(num) {
  let insideSpace = Math.floor(num / 2) - 1;
  let outsideSpace = 0;

  while (insideSpace >= 0) {
    
    console.log(`${" ".repeat(outsideSpace)}*${" ".repeat(insideSpace)}*${" ".repeat(insideSpace)}*${" ".repeat(outsideSpace)}`);
    insideSpace--;
    outsideSpace++;
  }

  console.log("*".repeat(num));
  
  insideSpace = 0;
  outsideSpace -= 1;
  
  while (outsideSpace >= 0) {
    
   console.log(`${" ".repeat(outsideSpace)}*${" ".repeat(insideSpace)}*${" ".repeat(insideSpace)}*${" ".repeat(outsideSpace)}`);
    insideSpace++;
    outsideSpace--;
  }

}

stars(13);