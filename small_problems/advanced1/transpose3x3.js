function transpose(matrix) {
  let newMatrix = [[], [], []];

  for (let i = 0; i < matrix.length; i += 1) {
    for (let j = 0; j < matrix.length; j += 1) {
      newMatrix[j].push(matrix[i][j]);
    }
  }
  return newMatrix;
}