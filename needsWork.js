/* eslint-disable max-len */
/*
const readline = require('readline-sync');

function prompt(msg) {
  console.log(`=> ${msg}`);
}
*/

function crunch(string) {
  let count = 1;
  let arr = string.split('');
  for (let i = 0; i <= arr.length; i += 1) {
    if (arr[i] === arr[count]) {
      arr.splice(i, 1);
      i = 0;
      count = 1;
    }
    count += 1;
    console.log(arr);
  }
  //console.log(arr.join(''));
}

crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""