let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];

console.log(arr.filter((subArr, elements) => subArr[elements] > 0));