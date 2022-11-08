/*

let munstersDescription = "The Munsters are creepy and spooky.";

console.log(munstersDescription.replace('T', 't'));

*/

let munstersDescription = "The Munsters are creepy and spooky.";

let swapCase = function(letters) {
  var newLetters = "";
  for (let i = 0; i < letters.length; i += 1) {
    if (letters[i] === letters[i].toLowerCase()) {
      newLetters += letters[i].toUpperCase();
    } else {
      newLetters += letters[i].toLowerCase();
    }
  }
  console.log(newLetters);
  return newLetters;
};

swapCase(munstersDescription);