/*
Write a function named to1337Speak that accepts a string (in this case a sentence), and returns a number representing the "Nerd Score" of the sentence. 

Instructions for the "Nerd Score":

Using the provided lookup table, replace every character in the given string with its corresponding leet speak character. Characters are case insensitive, 
ie "e" and "E" from the given string are both expressed as "3" in leet speak, despite the lookup table 
only including the lowercase "e". Do not count special characters.

Each leet speak character in the string increases the nerd score by 1 point.

If all the characters in a word can be expressed in leet speak, the nerd score is increased by 10 points.

If none of the characters in a word can be expressed in leet speak, the nerd score is decreased by 5 points.

Finally, return the "Nerd Score" in the form of a sentence: ie "Your sentence's Nerd Score is 12."

*/

/*

understand the problem:
Input: a string
Output: a string

rules: 
The output string is the cumulative "Nerd Score" in the form of a sentence.
The "Nerd Score" is calculated based on how many characters from the given string can be expressed in leet speak.
If all the characters in a given word can be expressed in leet speak, the nerd score is increased by 10
If none of the characters in a word can be expressed in leet speak, the nerd score is decreased by 5 points.




Question: What does it mean not to count special characters?
Answer: Consider special characters as not a part of the words.




Examples and Test Cases:

Input: "World Of Warcraft"
Output: "Your sentence's Nerd Score is: 2"

Input translated to leet speak: "wo51d of w42c247"

Nerd Score calculation:

Individual characters to leet speak: 5, 1, 4, 2, 2, 4, 7. 
Total of 7 characters. Nerd Score += 7

Words with all leet speak: 0
Total of 0 words. No change.

Words with no leet speak: "of".
Total of 1 word. Nerd Score -= 5

Total Nerd Score: 2






Second Example:

Input: "The beegees were great!"
Output: "Your sentence's Nerd Score is: 29"

Input translated to leet speak: "7h3 8336335 w323 62347"

Nerd Score calculation:

Individual characters to leet speak: 7, 3, 8, 3, 3, 6, 3, 3, 5, 3, 2, 3, 6, 2, 3, 4, 7.
Total of 9 characters. Nerd Score += 17

Words with all leet speak: "8336335" and "62347"
Total of 2 words. Nerd Score += 20

Words with no leet speak: 0
Total of 0 words. No change

Total Nerd Score: 37




Data structures:

By working with the given string, we could count the individual characters, but it would be difficult to count the words as a whole.

Seperating the string into an array of characters would be better, as it would allow us to reassign individual characters.


Algorithm:

Initialize a variable named nerdScore with a value of 0.

Start with using the replace method on the input string to create a new string without special characters.

Split the new string into an array of characters.

Iterate through the array and reassign the elements with leet speak characters with their cooresponding values from the lookup table.
At the same time, within the loop, increment nerdScore up by 1 for each character that is present in the lookup table.

Join the array into a new string, then split again into an array of words.

Iterate through the words, then within the loop, iterate through the characters. If every character has a cooresponding property in the lookup table,
add 10 to nerdScore. If none of them do, subtract 5.

return the sentence with the final nerdScore "Your sentence's Nerd Score is: ${nerdScore}."

*/

const leetChars = {

  a: '4',
  b: '8',
  e: '3',
  g: '6',
  i: '!',
  l: '1',
  r: '2',
  s: '5',
  t: '7'

};

function to1337Speak(string) {
  let nerdScore = 0;
  
  string = string.toLowerCase(); //if this is omitted it will result in missed nerd score points.
    //console.log(string); //testing that everything is lowercase.

  string = string.replace(/[^a-zA-Z0-9 ]/g, '');
    //console.log(string); //testing that all special characters are removed.

  let chars = string.split('');
    //console.log(chars); //testing that chars is an array of all the characters from string

  for (let idx = 0; idx < chars.length; idx += 1) {
    //console.log(chars[idx]);
    /*
    testing that our loop touches on every character from the chars array.
    if this isn't tested we could easily miss elements, get an error for iterating past the length
    of the array, or get an infinite loop.
    */
    //console.log(leetChars[chars[idx]]); 
    /*
    testing that all the characters in the array which are present in the lookup table are being
    accounted for.
    */
    if (leetChars[chars[idx]]) {
      nerdScore += 1;
      console.log(nerdScore); //testing that the nerdScore is being incremented properly
    }
  }

let words = chars.join('').split(' ');
  console.log(words); //testing that words is an array comprised of all the words from the original string.

words.forEach(word => {       // removed idx as an argument to the callback function. Was unneccessary.
  let chars = word.split('');
  //console.log(chars);
  /*
  testing to make sure we are passing individual characters from each word
  as arguments to the callback function of the every method.
  */
  
  if (chars.every(char => leetChars[char])) {
   nerdScore += 10;
  //  console.log(word, nerdScore); //testing that the 10 point word is correct and that every 10 point word is accounted for.
  } else if (word.split('').find(char => leetChars[char]) === undefined) { // leetChars[char] replaces leetChars[chars[idx]]
     nerdScore -= 5;
    //  console.log(word, nerdScore); //testing that the -5 point words are coorect and accounted for.
  }
});

  // console.log(nerdScore);//testing the final tally of nerd points.

  console.log(`Your sentence's Nerd Score is ${nerdScore}.`);
  return `Your sentence's Nerd Score is ${nerdScore}.`;
}



to1337Speak("World 0f Warcraft"); // returns "Your sentence's Nerd Score is 2."




// PITFALLS:

/*
if one were to rush through this problem without using the PEDAC process, it would be easy to misunderstand it and make mistakes.

The first line states that the return value of the function should be a number representing the "Nerd Score", but if one were to rush through, something
as crucial as the return value could be forgotten, and the student could end up returning the new sentence (a string) instead.


JUMPING INTO IT USING A STRING:

Data structures:

By working with the given string, we could count the individual characters, but it would be difficult to count the words as a whole.




function to1337Speak (string) {
  return string + leetChars.a;
}

console.log(typeof to1337Speak("hi"));
*/