/* understand the problem
input: an array
output: a new array

rules: the input is an MxN matrix made up of an array with nested arrays
the output is a new array of the MxN matrix rotated by 90 degrees, clockwise.

column i reversed becomes row i

*/

function rotate90(matrix) {
  let transposed = [];

  for (let rowIdx = 0; rowIdx < matrix[0].length; rowIdx += 1) {
    transposed.push([]);
  }

  for (let rowIdx = 0; rowIdx < matrix.length; rowIdx += 1) {
    for (let colIdx = matrix[0].length - 1; colIdx >= 0; colIdx -= 1) {
      transposed[colIdx].push(matrix[rowIdx][colIdx]);
    }
  }
  return transposed.map(arr => arr.reverse());
}

let matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

let matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8],
];

let newMatrix1 = rotate90(matrix1);
let newMatrix2 = rotate90(matrix2);
let newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));

console.log(newMatrix1);      // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
console.log(newMatrix2);      // [[5, 3], [1, 7], [0, 4], [8, 2]]
console.log(newMatrix3);      // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]