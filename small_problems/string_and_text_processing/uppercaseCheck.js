function isUppercase(string) {
  for (let idx = 0; idx < string.length; idx += 1) {
    let charCode = string.charCodeAt(idx);
    if ((charCode > 96) && (charCode < 123)) {
      return false;
    }
  }
  return true;
}

console.log(isUppercase('t'));               // false
console.log(isUppercase('T'));               // true
console.log(isUppercase('Four Score'));      // false
console.log(isUppercase('FOUR SCORE'));      // true
console.log(isUppercase('4SCORE!'));         // true
console.log(isUppercase(''));                // true

/*
function isUppercase(string) {
  for (let idx = 0; idx < string.length; idx += 1) {
    let charCode = string.charCodeAt(idx);
    if ((charCode > 96) && (charCode < 123)) {
      return false;
    }
  }
  return true;
}

function isUppercase(string) {
  for (let idx = 0; idx < string.length; idx += 1) {
    let charCode = string.charCodeAt(idx);
    return !((charCode > 96) && (charCode < 123));
  }
  return true;
}
*/