//first try

function longestSentence(string) {
  let splitSentences = string.split(/(?=[.?!])|(?<=[.?!])/g);
  // made an array of sentences with punctuation, but with punctuation as seperate elements.
  let sentencesWithPunc = (splitSentences.map((ele) => {
    let eleIndex = splitSentences.indexOf(ele);
    let fullSentence = splitSentences[eleIndex].concat(splitSentences[eleIndex + 1]);
    splitSentences.splice((eleIndex + 1), 1);
    return fullSentence;
  })).filter(ele => ele !== "");
  // made an array of sentences with punctuation concatenated.
  // made an array of sentences with punctuation included
  let words = (sentencesWithPunc.map(ele => ele.split(' ')))
    .sort((a, b) => a.length - b.length);

  let longestSentence = words[words.length - 1].join(' ');

  let sortedLengths = (splitSentences.map(ele => ele.trim().split(' ').length))
    .sort((a, b) => a - b); // made an array of sentences lengths and sorted them in ascending order

  let longestLength = sortedLengths[sortedLengths.length - 1];

  console.log(`
${longestSentence}
The longest sentence has ${longestLength} words`); // logged the length of the last element of the array. The longest sentence.
}





//second try

let longestSentence = text =>
  console.log(`The longest sentence has ${text.replace(/[!?]/g, '.').split('. ').sort((a, b) => a.split(" ").length - b.split(" ").length).pop().split(" ").length} words.`);