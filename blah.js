function isEmpty(value) {
  if (Array.isArray(value)) {
    if (value.length === 0) {
      return true;
    }
    return false;
  } else if (Object.keys(value).length === 0) {
    return true;
  }
  return false;
}
// test cases

console.log(isEmpty({}));          // true
console.log(isEmpty({ name: 'Janice' }));  // false

console.log(isEmpty(''));          // true
console.log(isEmpty('Janice'));       // false

let arr = [];
arr["foo"] = "bar";
arr[-1] = "boo";

let sparseArr = [];
sparseArr.length = 3;

console.log(isEmpty([]));          // true
console.log(isEmpty(arr));         // true
console.log(isEmpty(['Janice']));      // false
console.log(isEmpty(sparseArr));      // false