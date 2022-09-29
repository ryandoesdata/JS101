function sumOfInt(sumNum) {
  let total = 0;
  
  for (i = 1; i <= sumNum; i += 1) {
    total += i;
  }

  return total;
}

function productOfInt(prodNum) {
  let total = 1;

  for (i = 1; i <= prodNum; i += 1) {
    total *= i;
  }

  return total;
}  

let rlSync = require('readline-sync');

let int = rlSync.question('Please enter an integer greater than 0:\n');

//if (Number.isInteger(int)) {

let operator = rlSync.question('Enter "s" to compute the sum, or "p" to compute the product:\n');


if (operator === "s") {
  let sum = sumOfInt(int);
  console.log(`The sum of the integers between 1 and ${int} is ${sum}`);
  
} else if (operator === "p") {
      let prod = productOfInt(int);
      console.log(`The product of the integers between 1 and ${int} is ${prod}`);
} else {
    console.log("oops, whatchu tryna do?");
}
/*} else {
  console.log("not an integer buddy, try again")
}*/

