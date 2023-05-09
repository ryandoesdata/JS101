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

function isPalindrome (word) {
  return word.length > 1 && word === word.split("").reverse().join("");
}

function palindromes(string) {
  console.log(substrings(string).filter(isPalindrome));
}

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