/* eslint-disable max-len */

function comical() {
  console.log("Knock knock.");

  function witty() {
    console.log("Who's there?");
  }
}

comical();
witty();

// takeaways:
// console.log !== return BE SPECIFIC.
// research nested functions and block scope
// witty is undefined. BLOCK SCOPE.


/*time 1:10
You are given a string 'allowed' consisting of distinct characters and an array of strings 'words'. A string is consistent if all characters in the string appear in the string 'allowed'.

Return the number of consistent strings in the array words.

Example 1:

Input: allowed = "ab", words = ["ad","bd","aaab","baa","badab"]
Output: 2
Explanation: Strings "aaab" and "baa" are consistent since they only contain characters 'a' and 'b'.
Example 2:
Input: allowed = "abc", words = ["a","b","c","ab","ac","bc","abc"]
Output: 7
Explanation: All strings are consistent.
Example 3:
Input: allowed = "cad", words = ["cc","acd","b","ba","bac","bad","ac","d"]
Output: 4
Explanation: Strings "cc", "acd", "ac", and "d" are consistent.

*/

/* data structure: single string with characters. An array of strings, could be empty.

Output is a number.

Algorithm: 

allowed is a string
words is an array of strings
if all the characters in an element of words are

let string = "abc";
let words = ["a", "b", "c", "d"]
let total;


*/


console.log(f("abc", ["a","b","c","ab","ac","bc","abc"]))//7
console.log(f("cad", ["cc","acd","b","ba","bac","bad","ac","d"]))// 4
console.log(f("ab", ["ad","bd","aaab","baa","badab"]))// 2


// let string = "abc";
// let words = ["a", "b", "c", "d"];
// let total;

function f (string, words,) {
  let total = 0;

for (let i = 0; i < words.length; i++) {
  for (let j = 0; j < words[i].length; j++) {
  char = words[i][j];
  if (string.includes(char)) {
    total += 1;
  }
}
return total
}
}

//console.log(f);