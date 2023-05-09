/* understanding the problem
input: a number
output: a number

rules:
The output number will be the digit in the fibonacci sequence speficied by the input number
both numbers will be integers
function will be non-recursive

examples are provided

data structures:
two counter variables. each equal to one
a loop that continues until the input number reaches 0
within the loop body, code that increases one counter variable by adding 
it to the other.
counter is no
*/

function findFibonacciNumberByIndex(index) {
  let arr = [1];
  let fibNum = 1;
  let i = 0;
  let j = 1;

  while (true) {
    arr.push(fibNum);
    if ((index === 1) || (index === 0)) {
      break;
    } else if (arr.indexOf(fibNum) === index) {
      break;
    }
    fibNum = arr[i] + arr[j];
    i += 1;
    j += 1;
  }

  return (fibNum);
}

console.log(findFibonacciNumberByIndex(1));
console.log(findFibonacciNumberByIndex(2));
console.log(findFibonacciNumberByIndex(3));
console.log(findFibonacciNumberByIndex(4));