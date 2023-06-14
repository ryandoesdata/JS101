/* understand the problem
input: an array and a value
output: a number

rules:

the number is the index of the value if it's in the array.

the search must use binarySearch, which narrows the array down by half
depending on whether the value is greater or less than the middle value
of the array.

the array will always be sorted.

Examples are provided.

Data structures:

variable for the middle value

an if statement to see if the value equals the middle value of the array

an if statement to determine if the value is greater or less than the middle value
if greater, return second half of array using slice
if less, return first have using slice

repeat until the array length is 1, using a for loop.

*/
let yellowPages = ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot', 'Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge', 'Zooper'];
function binarySearch(arr, val) {
  let high = arr.length - 1;
  let low = 0;

  while(low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    if (arr[mid] === val) {
      return mid;
    } else if (val > arr[mid]) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
}

console.log(binarySearch(yellowPages, 'Pizzeria'));