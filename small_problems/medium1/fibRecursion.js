/*
input: a number
output: a number
rules: the output is the nth digit of the fibinacci sequence. Where n is the input.
Use recurrsion.
*/



function fib (num) {
  if (num <= 2) {
    return 1;
  }
  return (fib(num - 1) + fib(num - 2));
}


console.log(fib(5))