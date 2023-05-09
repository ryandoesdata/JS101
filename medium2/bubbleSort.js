/* 
understand the problem

input: an array
output: an array

rules:

swap two elements if the second is first is greater than the second


Examples are provided


Data structures:

An array as an argument and something to iterate over it
a while loop could work, except it needs to reset each time.
if the iteration equals the array length, return the array.
that means everything is sorted.

*/

function bubbleSort(arr) {
  let i = 0;
  let placeholder;

  while (i < arr.length) {
    if (arr[i] > arr[i + 1]) {
      placeholder = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = placeholder;
      i = 0;
    } else {
      i += 1;
    }
  }
  return arr;
}

let array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

let array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]






let sentencesWithPunc = splitSentences.map((ele) => {
  let eleIndex = splitSentences.indexOf(ele);
  if (eleIndex % 2 === 0) {
    let fullSentence = splitSentences[eleIndex].concat(splitSentences[eleIndex + 1]);
    return fullSentence;
  } else {
    return ele;
  }
});
