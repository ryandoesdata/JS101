/* input: an array
output: an array
rules: use recursion to break down the array and build it up again, but sorted.

examples are provided

data structures: use a stopping condition for when the length of the array === 1,

Until then, slice the arrays in half and push them into a new array
*/

function mergeSort(array) {
  if (array.length === 1) return array;

  let subArray1 = array.slice(0, array.length / 2); //subarr1 = [9, 5]
  console.log(subArray1);
  let subArray2 = array.slice(array.length / 2);    //subarr2 = [7, 1]
  console.log(subArray2);
  subArray1 = mergeSort(subArray1);  // subarr1 = (subarr1 = [9] subarr2 = [5]) returns merge(subarr1, subarr2)
  subArray2 = mergeSort(subArray2); // subarr2 = (subarr1 = [7] subarr2 = [1]) returns merge(subarr1, subarr2)

  return merge(subArray1, subArray2); //returns merge(subarr1, subarr2);
}

function merge(array1, array2) {
  let copy1 = array1.slice();
  let copy2 = array2.slice();
  let result = [];

  while (copy1.length > 0 && copy2.length > 0) {
    result.push(copy1[0] <= copy2[0] ? copy1.shift() : copy2.shift());
  }

  return result.concat(copy1.length === 0 ? copy2 : copy1);
}

console.log(mergeSort([9, 5, 7, 1, 8, 5]));