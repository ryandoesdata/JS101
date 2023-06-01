function staggeredCase(string, b = false) {
  let symbolTest = char => char.toLowerCase() === char.toUpperCase();
  let toggle = true;
  let arr = string.split('');

  if (b) {
    symbolTest = char => char = false;
  }

  for (let i = 0; i < arr.length; i += 1) {
    
    if (symbolTest(arr[i])) {
      continue;
    } else if (toggle) {
      arr[i] = arr[i].toUpperCase();
      toggle = false;
    } else {
      arr[i] = arr[i].toLowerCase();
      toggle = true;
    }
    
  }

  return arr.join('')
}


console.log(staggeredCase("I Love Launch School!", true) === "I LoVe lAuNcH ScHoOl!");
console.log(staggeredCase("ALL_CAPS", true) === "AlL_CaPs");
console.log(
  staggeredCase('ignore 77 the 4444 numbers', true) === "IgNoRe 77 ThE 4444 nUmBeRs"
);
staggeredCase('I Love Launch School!');        // "I LoVe lAuNcH ScHoOl!"
staggeredCase('ALL_CAPS');                     // "AlL_CaPs"
staggeredCase('ignore 77 the 4444 numbers');   // "IgNoRe 77 ThE 4444 nUmBeRs"

/* Input Validation

const readline = require('readline-sync');

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function searchWord (word = false, text = false) {

  if (word === false) {
    while (true) {
      prompt("Please enter a word")
      word = readline.question();
        if (word.length !== 0) break;
      prompt("Please enter at least one character.");
    }
  }
  mess
  if (text === false) {
    while (true) {
      prompt("Please enter some text")
      text = readline.question();
      if (text.length !== 0) break;
      prompt("Please enter at least one character.");
    }
  }
  let arr = []
  text.split(' ').map((words) => {
    if (words.toLowerCase() === word.toLowerCase()) {
      arr.push(`**${words.toUpperCase()}**`)
    } else {
      arr.push(words);
    }
  })
  console.log(arr.join(' '));
}

searchWord();

*/