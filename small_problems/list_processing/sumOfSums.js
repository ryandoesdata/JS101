function sumOfSums(arr) {
  let arr2 = [];
  for (let i = 0; i <= arr.length; i += 1) {
    arr2.push(arr.slice(0, i).reduce((a, b) => a + b, 0));
  }
  return arr2.reduce((a, b) =>  a + b, 0);
 }

sumOfSums([3, 5, 2]);        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
sumOfSums([1, 5, 7, 3]);     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
sumOfSums([4]);              // 4
sumOfSums([1, 2, 3, 4, 5]);  // 35