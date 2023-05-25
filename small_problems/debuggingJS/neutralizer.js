function neutralize(sentence) {
  let words = sentence.split(" "); //making an array of words from the argument
  function isNegative(word) {
    return ["dull", "boring", "annoying", "chaotic"].includes(word);
  }
  words.forEach(word => { // passing each word through a function
    if (isNegative(word)) { // if a word is part of the negative words array
      const index = words.indexOf(word); // index equals the index of that word in the words array
      console.log(index);
      words.splice(index, 1); // splice that word from words
      console.log(words);
    }
  });
  return words.join(" ");
}

console.log(
  neutralize("These dull boring annoying cards are part of a chaotic board game.")
);