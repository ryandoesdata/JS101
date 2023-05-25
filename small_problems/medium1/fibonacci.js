/*
input: a number
output: a number

rules:

input is always an integer greater than or equal to 2.

first two numbers are 1, next number is the sum of previous two.

output is the index of the first number that has number of digits
specified by the argument.

examples are provided

data structure:

an array to push the fibonacci numbers

a for loop that stops when the numbers reach the amount of digits specified

a return statement to return the index of the last number pushed into the array

algorithm:

declare the fuction with one parameter

initialize a new empty array
initialize a variable for fibonacci numbers equal to 1

write a while loop to push the fibonacci numbers into the array while the return value is true
break once the fibonacci number string length property equals the parameter as a string.

return the length of the array.

*/

function findFibonacciIndexByLength(length) {
  let arr = [1n];
  let fibNum = 1n;
  let i = 0n;
  let j = 1n;

  while (true) {
    arr.push(fibNum);
    fibNum = arr[i] + arr[j];
    if (String(fibNum).length === length) {
      break;
    }
    i += 1n;
    j += 1n;
  }

  return (arr.length);
}

console.log(findFibonacciIndexByLength(2n) === 7n);    // 1 1 2 3 5 8 13
//findFibonacciIndexByLength(3n) === 12n;   // 1 1 2 3 5 8 13 21 34 55 89 144
//findFibonacciIndexByLength(10n) === 45n;
//findFibonacciIndexByLength(16n) === 74n;
//findFibonacciIndexByLength(100n) === 476n;
//findFibonacciIndexByLength(1000n) === 4782n;
//findFibonacciIndexByLength(10000n) === 47847n;

// The last example may take a minute or so to run.