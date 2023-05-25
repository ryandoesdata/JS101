/* 
understanding the problem
input: an array
output: an array

rules:
function must use the Merge Sort recursive sorting algorithm.
Merge sort breaks down an array's elements into nested subarrays,
then puts them back together in sorted order.

examples and test cases provided.

data structures:
something to seperate the elements... push? push could also sort them
something to put them back together... concat
something to flatten them, flat.
need a stopping condition
use part of the merge function below.

algorithm:

a stopping condition where if counter = 
return 
concat
return something that could sort it and combine it...concat?

*/
function merge(arr, arr2) {
  let newArr = arr.concat(arr2);
  let i = 0;
  let j = 0;
  let placeholder;

  while (j < newArr.length) {
    if (newArr[j] > newArr[j + 1]) {
      placeholder = newArr[j + 1];
      newArr[j + 1] = newArr[j];
      newArr[j] = placeholder;
      j = 0;
    }
    j += 1;
  }
  console.log(newArr);
}
/*
function fibonacci(nth) {
  if (nth <= 2) {
    return 1;
  }
  return fibonacci(nth - 1) + fibonacci(nth - 2);
}

console.log(fibonacci(50));


let arr = [9, 5, 7, 1];
let newArr = [[], []];
newArr[0].push(arr[0]);
newArr[0].push(arr[1]);
newArr[1].push(arr[2]);
newArr[1].push(arr[2]);

arr.forEach(ele => )

console.log(newArr);

console.log([[[9], [5]], [[7], [1]]].length);

*/

function mergeSort(array) {
  if (array.length === 1) return array;

  let subArray1 = array.slice(0, array.length / 2);
  let subArray2 = array.slice(array.length / 2);
  subArray1 = mergeSort(subArray1);
  subArray2 = mergeSort(subArray2);

  return merge(subArray1, subArray2);
}

mergeSort([1, 5, 3, 92, 2]);