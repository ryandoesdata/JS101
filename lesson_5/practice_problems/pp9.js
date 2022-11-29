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

arr.map(innerArray => {
  if (typeof innerArray[0] === 'string') {
    return innerArray.slice().sort();
  } else {
    return innerArray.slice().sort((a, b) => a - b);
  }
});

// Does Not Work

arr.map(innerArray => {
  if (typeof innerArray[0] === Number) {
    return innerArray.slice().sort((a, b) => a - b);
  } else {
    return innerArray.slice().sort();
  }
});

