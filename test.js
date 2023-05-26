function substrings (string) {
  let arr = [];

  for (let i = 0; i <= string.length; i += 1) {
    for (let j = i + 1; j <= string.length; j += 1) {
      arr.push(string.substring(i, j));
    }
  }
  return arr;
}

// j starts at 1 each time. Needs to increment by 1


substrings('abcde');

// returns
[ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ]