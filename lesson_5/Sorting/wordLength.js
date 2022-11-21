let words = ['go', 'ahead', 'and', 'jump'];

let sortedWords = words.sort((a, b) => {
  if (a.length < b.length) {
    return -1;
  } else if (a.length > b.length) {
    return 1;
  } else {
    return 0;
  }
});

console.log(sortedWords);

/*
let wordLengths = words.map(x => x.length);

let sortedLengths = wordLengths.sort((a, b) => b - a);

console.log(sortedWords.map(x => words[x]));

let sortedWords = [];

for (let index = 0; index < words.length; index += 1) {
  for (let jindex = 0; jindex < sortedLengths.length; jindex += 1) {
    if (words[index].length === sortedLengths[jindex]) {
      sortedWords.push(words[index]);
    }
  }
}
console.log(sortedWords);

/*
have: array of numbers in decending onder
need: array of words corresponding to the numbers
*/