/*
input: a string
output: a string

rules: the spelled out numbers in the input become numerical digits in the output
must eliminate special characters

examples are provided

data structures:
using a lookup table (an array).
account for special characters

algorithm:
initialize an array of number words from zero to nine
split the calling string into an array
go through the calling array word by word using map, return the index of a number word should one
come up.

*/
function wordToDigit(string) {
  let numberWords = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
  let arr = string.match(/[a-zA-Z0-9]+/g);
  console.log(arr);
  arr.forEach((word) => {
    if (numberWords.includes(word)) {
      string = string.replace(word, numberWords.indexOf(word));
    }
  })
  console.log(string);    
}

wordToDigit('Please call me at five five five one two weight four. Thanks.');
// "Please call me at 5 5 5 1 2 3 4. Thanks."

// return original but replace...