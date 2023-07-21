/*
input: A string
output: boolean
rules: Cannot use the same block twice.
-----------------------------

examples and test cases:
isBlockWord('BATCH');      // true
isBlockWord('BUTCH');      // false
isBlockWord('jest');       // true
-----------------------------

data structures:
an object literal to hold the blocks
an array of the argument characters
iterate through characters
if one is found in the blocks, reassign or remove the block.
-----------------------------





how to test if a character is in a block?
-----------------------------

input: a character
output: a boolean
rules: the character must be or not be present in a block
-----------------------------

examples:
"A" =>  {A:B
         C:D
         E:F};
                Evaluates as `true`
-----------------------------
question: how to search through the blocks?

Data structures:
An object entries array could work.

Algorithm:
Create an object entries array,
use for each on the nested arrays
use find, if true, remove the block, if false return false.
-----------------------------


Whole problem algorithm:

Reassign the string variable to uppercase
Establish the array of blocks
Iterate through the array, searching for each character in the string.
If a character is found in a block. Remove the block.
If undefined is returned, return false.
Else, return true.

*/

function isBlockWord(word) {
  let blocks =  
  [['B', 'O'], ['X', 'K'], ['D', 'Q'], ['C', 'P'], ['N', 'A'],
  ['G', 'T'], ['R', 'E'], ['F', 'S'], ['J', 'W'], ['H', 'U'],
  ['V', 'I'], ['L', 'Y'], ['Z', 'M']];

  word = word.toUpperCase().split('');

  for (let i = 0; i < word.length; i += 1) {
    for (let j = 0; j < blocks.length; j += 1) {
      if (blocks[j].find(ele => ele === word[i])) {
        blocks.splice(j, 1);
        word.splice(i, 1);
        j = 0;
      }
    }
    console.log(word[i]);
  }
  return word.length === 0;
}

console.log(isBlockWord("jjest"));