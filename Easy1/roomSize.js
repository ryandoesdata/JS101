let rlSync = require('readline-sync');

let length = rlSync.question('Enter the length\n');
let width = rlSync.question('Enter the width\n');

let sqrMeter = Math.floor(length * width);
let sqrFeet = Math.floor(sqrMeter * 10.7639);


console.log(`The area of the room is ${sqrMeter} square meters (${sqrFeet} 
square feet).`)
