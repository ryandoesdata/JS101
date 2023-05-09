
/* eslint-disable max-len */
/*
understand the problem

input: a string
output: a number

*/

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


let longText =
  'Four score and seven years ago our fathers brought forth on this ' +
  'continent a new nation, conceived in liberty, and dedicated to the ' +
  'proposition that all men are created equal. Now we are engaged in a ' +
  'great civil war, testing whether that nation, or any nation so ' +
  'conceived and so dedicated, can long endure. We are met on a great ' +
  'battlefield of that war. We have come to dedicate a portion of that ' +
  'field, as a final resting place for those who here gave their lives ' +
  'that that nation might live. It is altogether fitting and proper that ' +
  'we should do this.';

let longerText = longText +
  'But, in a larger sense, we can not dedicate, we can not consecrate, ' +
  'we can not hallow this ground. The brave men, living and dead, who ' +
  'struggled here, have consecrated it, far above our poor power to add ' +
  'or detract. The world will little note, nor long remember what we say ' +
  'here but it can never forget what they did here. It is for us the ' +
  'living, rather, to be dedicated here to the unfinished work which ' +
  'they who fought here have thus far so nobly advanced. It is rather ' +
  'for us to be here dedicated to the great task remaining before us -- ' +
  'that from these honored dead we take increased devotion to that ' +
  'cause for which they gave the last full measure of devotion -- that ' +
  'we here highly resolve that these dead shall not have died in vain ' +
  '-- that this nation, under God, shall have a new birth of freedom -- ' +
  'and that government of the people, by the people, for the people, ' +
  'shall not perish from the earth.';

longestSentence(longText);
// Four score and seven years ago our fathers brought forth on this continent a new nation, conceived in liberty, and dedicated to the proposition that all men are created equal.
//
// The longest sentence has 30 words.

longestSentence(longerText);
// It is rather for us to be here dedicated to the great task remaining before us -- that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion -- that we here highly resolve that these dead shall not have died in vain -- that this nation, under God, shall have a new birth of freedom -- and that government of the people, by the people, for the people, shall not perish from the earth.
//
// The longest sentence has 86 words.

longestSentence("Where do you think you're going? What's up, Doc?");
// Where do you think you're going?
//
// The longest sentence has 6 words.

longestSentence("To be or not to be! Is that the question?");
// To be or not to be!
//
// The longest sentence has 6 words.

