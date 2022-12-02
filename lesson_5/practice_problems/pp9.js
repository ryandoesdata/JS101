/*

let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

let everySort = (arr.map(element => (element.sort((a, b) => a - b))));

console.log(everySort);

let innerArray1 = ['b', 'c', 'a'];
let innerArray2 = [2, 11, -3];
let innerArray3 = ['blue', 'black', 'green'];
let outerArray = [innerArray1, innerArray2, innerArray3];

let transformedArray = outerArray.map(innerArray => {

let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

*/

let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

// Works

let ascendingArray = arr.map(innerArray => {
  if (typeof innerArray[0] === 'string') {
    return innerArray.slice().sort();
  } else {
    return innerArray.slice().sort((a, b) => b - a);
  }
});

console.log(ascendingArray);

let usingNumbers = arr.map(innerArray => {
  if (typeof innerArray[0] === 'number') {
    return innerArray.slice().sort((a, b) => a - b);
  } else {
    return innerArray.slice().sort();
  }
});

console.log(usingNumbers);