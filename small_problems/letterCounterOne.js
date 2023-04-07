/*
Input: string
Output: object literal

Rules: 
The keys of the object literal must be the length of at least one word in the string
The values of the object must be the total number of words with the lengths of the cooresponding keys.

Examples and validation:

wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
wordSizes('');                                            // {}

Data Structures:

Declare an empty object.
The given string could be broken into an array using split, this would isolate all the words.
We should make a new array using the lengths of the first array.
Count the number of elements with the same lengths. Declare a variable to do this.
*/

function wordSizes(words) {
  let wordsArray = words.replace(/[^\w\s]/gi, '').split(' ');
  let count = {};

  for (let idx = 0; idx < wordsArray.length; idx += 1) {
    let wordSize = wordsArray[idx].length;
    if (wordSize === 0) {
      continue;
    }

    if (!count[wordSize]) {
      count[wordSize] = 0;
    }
    count[wordSize] += 1;
  }

  return count;
}



console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));
