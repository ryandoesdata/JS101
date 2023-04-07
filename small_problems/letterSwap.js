function swap(string) {
  let arr = [];
  let words = string.split(' ');
  for (let idx = 0; idx < words.length; idx += 1) {
    let reverseWord = words[idx].split('').reverse().join('');
    arr.push(reverseWord);
  }
  let reverseString = arr.join(' ');
  console.log(reverseString);
}

swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
swap('Abcde');                          // "ebcdA"
swap('a');                              // "a"