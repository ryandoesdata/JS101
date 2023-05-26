function integerToString(num) {
  let arr = [];
  do {
    let lastDigit = num % 10;
    arr.unshift(lastDigit);
    num = Math.floor(num / 10);
  } while (num > 0);
  return arr.join('');
}

function signedIntegerToString(num) {
  if (num > 0) {
    return "+".concat(integerToString(num));
  } else if (num < 0) {
    return "-".concat(integerToString((num) + (num * -2)));
  } else if (num === -0) {
    return "-0";
  }
  return "0";
}

console.log(signedIntegerToString(4321));
console.log(signedIntegerToString(-123));
console.log(signedIntegerToString(-0));
console.log(signedIntegerToString(-0) === "-0");

/*
Input: a number
output: a string

rules: the string must be the same number as
the input, but with the string datatype.

No using standard conversion functions.

Examples and Test Cases:
integerToString(4321);        // "4321"
integerToString(0);           // "0"
integerToString(5000);        // "5000"
integerToString(1234567890);  // "1234567890"

Data Structures:
Start with a number passed into a function.

Need to break the number into an array of digits.
Loop, divide by 10, unshift the remainder to a new array.
*/