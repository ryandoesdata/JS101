function negative(num) {
  let doubleNum = num + num;
  if (num > 0) {
    return num - doubleNum;
  } else if (num === 0) {
    return -0;
  }
  return num;
}

console.log(negative(5));     // -5
console.log(negative(-3));    // -3
console.log(negative(0));     // -0