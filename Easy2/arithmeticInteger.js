let rlSync = require('readline-sync');

let num1 = rlSync.question('Enter the first number\n');
let num2 = rlSync.question('Enter the second number\n');
num1 = parseInt(num1);
num2 = parseInt(num2);

let sum = num1 + num2;
let difference = num1 - num2;
let product = num1 * num2;
let quotient = num1 / num2;
let remainder = num1 % num2;
let power = num1 ** num2;

console.log(`${num1} + ${num2} = ${sum}`);
console.log(`${num1} - ${num2} = ${difference}`);
console.log(`${num1} * ${num2} = ${product}`); 
console.log(`${num1} / ${num2} = ${quotient}`); 
console.log(`${num1} % ${num2} = ${remainder}`); 
console.log(`${num1} ** ${num2} = ${power}`);
