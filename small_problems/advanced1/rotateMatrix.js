function rotate90(matrix) {
  let newMatrix = matrix[0].map(ele => ele = []);

  for (let i = 0; i < matrix[0].length; i += 1) {
    for (let j = matrix.length - 1; j >= 0; j -= 1) {
      newMatrix[i].push(matrix[j][i]); 
    }
  }
  return newMatrix;

}

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