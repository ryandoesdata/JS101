/*
Understanding the problem
input: two arrays
output: one array

rules: take the two arrays, combine them, and sort them
no using sort......
original arrays must not be mutated.


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

merge([1, 5, 9], [2, 6, 8]);      // [1, 2, 5, 6, 8, 9]
merge([1, 1, 3], [2, 2]);         // [1, 1, 2, 2, 3]
merge([], [1, 4, 5]);             // [1, 4, 5]
merge([1, 4, 5], []);             // [1, 4, 5]

