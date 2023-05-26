function swap(string) {
  console.log(string.split(' ').map(words => words.split('').reverse().join('')).join(' '));
}

swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
swap('Abcde');                          // "ebcdA"
swap('a');                              // "a"