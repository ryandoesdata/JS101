function leadingSubstrings(string) {
  let arr = []

  for (let i = 1; i <= string.length; i += 1) {
    arr.push(string.substring(0, i))
  }
  return arr;
}

function allSubstrings(string) {
  let arr = [];
  for (let i = 0; i < string.length; i += 1) {
    arr.push(leadingSubstrings(string.substring(i, string.length)))
  }
  return arr.flat();
}

let isPalindrome = word =>
  ((word.length > 1) && (word === word.split('').reverse().join('')));

let palindromes = string =>
  allSubstrings(string).filter(words => isPalindrome(words));

palindromes('abcd');       // []
palindromes('madam');      // [ "madam", "ada" ]

palindromes('hello-madam-did-madam-goodbye');
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

palindromes('knitting cassettes');
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]