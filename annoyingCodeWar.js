/*
input: an array
output: an array with nested arrays
rules: the output nested arrays are comprised of 5 words each. Each word within the nested arrays contains
a unique vowel at a certain index of the word, but the consonants all occur at the same indeces of the words.

examples:
["last", "lest", "list", "lost", "lust"]

["bill", "bull", "bell", "ball", "boll"]

algorithm: 

create an empty array to hold the output arrays
name it solutions

using the map method, create a new array comprised of the words from the given array, with vowels removed.
name it noVowels

create an empty object
name it occurances

iterate through the noVowels, counting each instance of the words in the empty object

create a new array comprised of the words that occured 5 times
name it targetWords

we have now isolated the words with 5 vowel alternations.

iterate through targetWords. For each element, find the indeces that match it within noVowels. 
push these indeces into an array called indeces

Append the elements with these indeces into a new array, sort it, then push it into solutions.

repeat this for all the elements of targetWords.
*/

function findSolutions(words) {
  let solutions = [];
  let noVowels = [];
   words.forEach((ele) => {
    noVowels.push(ele.replace(/[aeiou]/gi, ""));
  });

  let occurances = {};

  noVowels.forEach(word => {
    if (occurances[word]) {
      occurances[word] += 1;
    } else {
      occurances[word] = 1;
    }
  });

  //console.log(occurances);

  let props = Object.entries(occurances);

  //console.log(props);

  let targetWords = [];

  props.forEach(props => {
    if (props[1] >= 5) {
      targetWords.push(props[0]);
    }
  });

  let indeces = [];

  for (let idx = 0; idx < targetWords.length; idx += 1) {
    for (let inner = 0; inner < noVowels.length; inner += 1) {
      if (targetWords[idx] === noVowels[inner]) {
       indeces.push(words[inner]);
      }
      if (indeces.length >= 5) {
        solutions.push(indeces.sort());
        indeces = [];
      } 
    }
  }

return solutions;

}

findSolutions(["Heallo", "Heallo", "Heallo", "Heallo", "Heallo", "Hello", "Hillo", "Hollo", "g", "2", "Hallo", "hullo", "Hullo", "bullo", "billo", "bollo", "ballo", "bello"]);
