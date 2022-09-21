let rlSync = require('readline-sync');

let length = rlSync.question('Enter the length\n');
let width = rlSync.question('Enter the width\n');

let sqrMeter = length * width;
let sqrFeet = Math.floor(sqrMeter * 10.7639);


console.log(`The area of the room is ${sqrMeter} square meters (${sqrFeet} 
square feet).`)

//let length = Number(rlSync.question('Enter the length of the room in 
//meters:\n'));
