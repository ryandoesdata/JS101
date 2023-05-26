const readline = require('readline-sync');

//function calculateRetirement(currentAge, retirementAge) {

function prompt(msg) {
  console.log(`=> ${msg}`);
}

let currentYear = 2023;

prompt("What is your age?");
let currentAge = readline.question();

prompt("At what age would you like to retire?");
let retirementAge = readline.question();

let retirementYear = (retirementAge - currentAge) + currentYear;

prompt(`It's ${currentYear}. You will reture in ${retirementYear}`);
prompt(`You only have ${retirementAge - currentAge} years of work to go!`);