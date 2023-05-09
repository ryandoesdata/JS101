function removeVowels (arr) {
  const VOWELS = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let filteredArr = [];

  arr.forEach((words) => {
    filteredArr.push(words.split('').filter(char => !VOWELS.includes(char)).join(''));
  });

  return filteredArr;
}

removeVowels(['abcdefghijklmnopqrstuvwxyz']);         // ["bcdfghjklmnpqrstvwxyz"]
removeVowels(['green', 'YELLOW', 'black', 'white']);  // ["grn", "YLLW", "blck", "wht"]
removeVowels(['ABC', 'AEIOU', 'XYZ']);                // ["BC", "", "XYZ"]

