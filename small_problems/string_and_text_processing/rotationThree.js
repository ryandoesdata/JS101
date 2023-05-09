function rotateRightmostDigits(num, digit) {
  let arr = String(num).split("");
  let selectNums = arr.slice(digit);

  selectNums = selectNums.concat(selectNums.shift());

  arr.splice(digit, arr.length, selectNums);

  return arr.flat().join("");
}

// understand the problem
// input: a number to be rotated
// output: the rotated number

// rules
// rotate first number one digit to left
// rotate the second number to left
// repeat until all digits are rotated left

// examples and test cases are provided

// data structure
// convert number to string to operate on

// algorithm
// convert number to a string
// use previous function to rotate the number
// use a loop to iterate through the digits
// return the final number

//code

function maxRotation(num) {
  let idx = 0;

  while (idx < String(num).length) {
    num = rotateRightmostDigits(num, idx);
    idx += 1;
  }
  return Number(num);
}


maxRotation(735291);          // 321579
maxRotation(3);               // 3
maxRotation(35);              // 53
maxRotation(105);             // 15 -- the leading zero gets dropped
maxRotation(8703529146);      // 7321609845