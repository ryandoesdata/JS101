function multiplyAllPairs(arrOne, arrTwo) {
  let arrThree = [];
  let idxOne = 0;
  let idxTwo = 0;

  while (idxOne < arrOne.length) {
    while (idxTwo < arrTwo.length) {
      arrThree.push(arrOne[idxOne] * arrTwo[idxTwo]);
      idxTwo += 1;
    }
    idxOne += 1;
    idxTwo = 0;
  }
  return arrThree.sort((a, b) => a - b);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16])