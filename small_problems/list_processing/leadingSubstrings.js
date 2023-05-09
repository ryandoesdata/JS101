function leadingSubstrings(string) {
  let arr = [];
  let idx = 1;

  while (idx <= string.length) {
    arr.push(string.substring(0, idx));
    idx += 1;
  }
  console.log(arr);
}

leadingSubstrings('abc');      // ["a", "ab", "abc"]
leadingSubstrings('a');        // ["a"]
leadingSubstrings('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]