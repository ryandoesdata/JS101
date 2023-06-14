function transpose(matrix) {
  let newMatrix = matrix[0].map(ele => ele = []);

  for (let i = 0; i < matrix.length; i += 1) {
    for (let j = 0; j < matrix[0].length; j += 1) {
      newMatrix[j].push(matrix[i][j]);
    }
  }
  return newMatrix;

}

const matrix = [
  [1, 5, 8, 5],
  [4, 7, 2, 0],
  [3, 9, 6, 1]
];