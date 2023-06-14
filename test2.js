// use a counter
// start at zero, if the string is larger, count equals the middle index
// if string is smaller, count remains the same
// next, if string is larger, count plus equals middle index
// if string is smaller, count remains the same
// once string equals the middle index
// return count plus equals middle index

// test cases: string is 6, array is [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// count equals 
let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let count = arr.splice(0, arr[Math.ceil(arr.length / 2)]).length - 1;
console.log(arr);
