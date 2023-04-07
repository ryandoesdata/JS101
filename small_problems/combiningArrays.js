function union(arrOne, arrTwo) {
  let arrThree = arrOne.concat(arrTwo);
  let currentNum;
  let idx = 0;

  while (idx < arrThree.length) {
    currentNum = arrThree[idx];
    for (let i = 1; i < arrThree.length; i += 1) {
      if (currentNum === arrThree[i]) {
        //console.log(arrThree[i]);
      }
    }
    idx += 1;
    console.log(currentNum);
  }
  return arrThree;
}

union([1, 2, 3], [4, 5, 6, 6]);
//console.log([1, 2, 3].splice(1, 2));