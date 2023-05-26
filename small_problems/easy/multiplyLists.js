function multiplyList(arrOne, arrTwo) {
  return arrOne.map((element, idx) => {
    return element * arrTwo[idx];
  });
}

//const multiplyList = (arr1, arr2) => arr1.map((num, i) => num * arr2[i]);


console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]