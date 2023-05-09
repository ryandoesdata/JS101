function leadingSubstrings(string) {
  let arr = [];
  let idx = 1;

  while (idx <= string.length) {
    arr.push(string.substring(0, idx));
    idx += 1;
  }
  return arr;
}

function substrings(string) {
  let arr = [];

  while (string.length > 0) {
    arr.push(leadingSubstrings(string));
    string = string.substring(1);
  }
  return arr.flat();
}

console.log(substrings("abcde"));