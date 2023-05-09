/*
understand the problem

input: a string
output: boolean

rules: 

you are given an object with properties. each property has a single letter for
a key and another single letter for a value.

the input string cannot have two inputLetters that are on the same "block", and no repeat inputLetters.

case insensitive


Examples are provided


Data structures:
an array with empty subarrays equal to the amount of blocks.
use object entries to create an array with each block as a nested array
uppercase the string and split to an array

account for duplicate inputLetters:
  iterate through the input array
  iterate again while holding each element
  if a letter equals the current element, return false.

compare each letter to the inputLetters in the nested arrays
iterate through the input inputLetters
iterate through the nested


get indexof the inputLetters in the input, place in an array

loop through array

filter (lookup.indexOf(ele) is odd) && lookup[lookup.indexOf(ele) + 1]) 

*/

const { keyInSelect } = require("readline-sync");

let blocks = { B:'O', X:'K', D:'Q', C:'P', N:'A', G:'T', R:'E', F:'S', J:'W', H:'U', V:'I', L:'Y', Z:'M' };

function isBlockWord(word) {
  let lookupLetters = Object.entries(blocks).flat(); // creates a flat array of all the object entries from blocks
  //console.log(lookupLetters); // logs the array
  let inputLetters = word.toUpperCase().split(''); // splits the input string into an array with letters all uppercase.
//console.log(inputLetters);
  for (let i = 0; i < inputLetters.length; i += 1) { // for loop starting at 0, ending at at the end of the input string length, incrementing by 1
    for (let j = i + 1; j < inputLetters.length; j += 1) { // for loop starting at i + 1, (1?)
      if (inputLetters[i] === inputLetters[j]) { // if letter i equals the next letter, or any other letter, return false
        return false;
      } else if (((lookupLetters.indexOf(inputLetters[i])) % 2 === 0) &&
                ((lookupLetters.indexOf(inputLetters[i])) ===
                (lookupLetters.indexOf(inputLetters[j]) - 1))) {
        return false;
      }
      //onsole.log((lookupLetters.indexOf(inputLetters[i])));
      console.log(lookupLetters.indexOf(inputLetters[i]));
      console.log(inputLetters[i]);
      console.log(lookupLetters.indexOf(inputLetters[j]) + 1);
      console.log(inputLetters[j]);
    }
      //console.log(lookupLetters.indexOf(inputLetters[i]));
      //console.log((lookupLetters.indexOf(inputLetters[i]) + 1));
  }
  return true;
}


console.log(isBlockWord('BUTCH'));

function isBlockWord(word) { // declare function with one argument
  let blocks = ['BO', 'XK', 'DQ', 'CP', 'NA', 'GT', 'RE', 'FS', 'JW', 'HU', 'VI', 'LY', 'ZM']; // initialize an array with "blocks"
  let letters = word.split(""); // "initialize a variable with a reference to an array of the argument string split into an array of individual characters"

  for (let index = 0; index < letters.length; index += 1) { // start a for loop
    let matchingBlock = blocks.filter(block => { // initialize a variable to a filter method called by the array "blocks".
      return block.indexOf(letters[index].toUpperCase()) > -1; // The first letter of a "block" will be assigned to `matchingBlock` if the index of `letters[index]` is greater than -1. That is to say, if letters[index] exists in "block"
    })[0]; // 
console.log(matchingBlock);
    if (matchingBlock === undefined) { // if the first letter does not exist, return false
      return false;
    } else {
      blocks.splice(blocks.indexOf(matchingBlock), 1); // if it does, remove the first letter, 
    }
  }

  return true;
}

isBlockWord("hello");