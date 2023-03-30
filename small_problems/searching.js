const readline = require('readline-sync');

function prompt(msg) {
  console.log(`=> ${msg}`);
}

prompt('Enter the 1st number:');

let first = readline.question();

prompt('Enter the 2nd number:');

let second = readline.question();

prompt('Enter the 3rd number:');

let third = readline.question();

prompt('Enter the 4th number:');

let fourth = readline.question();

prompt('Enter the 5th number:');

let fifth = readline.question();

prompt('Enter the last number:');

let last = readline.question();

let allNums = (first + second + third + fourth + fifth).toString();

if (allNums.includes(last)) {
  prompt(`The number ${last} appears in ${first},${second},${third},${fourth},${fifth}.`);
} else {
  prompt(`The number ${last} does not appear in ${first},${second},${third},${fourth},${fifth}.`);
}