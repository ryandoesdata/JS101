function centerOf(string) {
  let halfString = string.length / 2;
  if (string.length % 2 !== 0) {
    return string.charAt(Math.floor(halfString));
  } else if (string.length === 2) {
    return string;
  }
  return string.substring((halfString - 1), (halfString + 1));
}

console.log(centerOf('aaAAaa'));
console.log(centerOf('aaAaa'));
console.log(centerOf('aa'));
console.log(centerOf('a'));
