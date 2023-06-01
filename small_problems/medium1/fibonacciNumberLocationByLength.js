/* input: a number
output: a number

rules: the output is the index of the first fibonacci number that has the number of digits specified by the argument.

examples are provided.

data structures:
an array to push each number of the fibonacci sequence into
a loop to keep pushing the numbers
a stopping condition of the length of the current element as a string being equal to the argument.
return the current element.

*/

function findFib (idx) {
  let arr = [1n];
  let num = 1n;
  let i = 0n;
  
  for (i; String(arr[i]).length < idx; i += 1n) {
    arr.push(num);
    num += arr[i];
  }
  
  console.log(i);
}

findFib(10000n);