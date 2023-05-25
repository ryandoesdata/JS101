/* understand the problem
input: An array with three nested arrays, each with three elements
output: a new array with three nested arrays.

rules: the elements of the first array will become the first index of the transposed nested arrays.
second array elements will become second index
third array elements will become third index.
the output will be a new array.

examples are provided.

data structures:
map will return a new array, we would need to iterate over...
forEach could push the elements into an empty nested array...returning a new array.
*/

function transpose(matrix) {
  let transposed = [];

  for (let rowIdx = 0; rowIdx < matrix[0].length; rowIdx += 1) {
    transposed.push([]);
  }

  for (let rowIdx = 0; rowIdx < matrix.length; rowIdx += 1) {
    for (let colIdx = 0; colIdx < matrix[0].length; colIdx += 1) {
      transposed[colIdx].push(matrix[rowIdx][colIdx]);
    }
  }

  return transposed;
}


console.log(transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]));        // [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]