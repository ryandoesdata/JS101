let rlSync = require('readline-sync');

let bill = rlSync.question('What is the bill?\n');
let tipPercentage = rlSync.question('What is the tip percentage?\n');

let tipAmount = ((tipPercentage / 100) * bill);
let totalAmount = tipAmount + parseInt(bill);

console.log (`The tip is $${tipAmount.toFixed(2)}`);
console.log(`The total is $${totalAmount.toFixed(2)}`);
