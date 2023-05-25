/* understand the problem
input: one or two numbers
output: array

rules: the array will contain all the integers between the two arguments, inclusive
*/


function range(start, end = -1) {
  let range = [];

  if (end === -1) {
    end = start;
    start = 0;
  }

  for (let element = start; element <= end; element++) {
    range.push(element);
  }
  return range;
}

// Examples

console.log(range(10, 20));
console.log(range(5));