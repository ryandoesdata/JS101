/* eslint-disable id-length */
function multiplyAllPairs (arr1, arr2) {
  let arr3 = [];

  for (let i = 0; i < arr1.length; i += 1) {
    for (let j = 0; j < arr2.length; j += 1) {
      arr3.push(arr1[i] * arr2[j]);
    }
  }
  return arr3.sort((a, b) => a - b);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16])