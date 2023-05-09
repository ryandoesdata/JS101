/* 
understand the problem
input: a number
output: a number

rules

write a function that returns the digit of the fibonacci sequence specified by
the number passed as a argument.
function must call itself at least once
must have an ending condition
results of each recursion are used in each step

Examples provided

data structures:
a function that runs for the amount of times specified by the argument.
each time the function runs, the fibonacci sequence increases by 1.
a function that calculates the fibonacci sequence.

algorithm:


*/

function fibonacci(nth) {
  if (nth <= 2) {
    return 1;
  }
  return fibonacci(nth - 1) + fibonacci(nth - 2);
}

console.log(fibonacci(50));