let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

let charString = Object.values(obj).join('');
let charArray = charString.split('');

let vowels = '';

charArray.forEach(function (element) {
  if (element === 'a') {
    vowels += element;

  } else if (element === 'e') {
    vowels += element;

  } else if (element === 'i') {
    vowels += element;

  } else if (element === 'o') {
    vowels += element;

  } else if (element === 'u') {
    vowels += element;
  }
});

console.log(vowels);

/*

LS Answer

let vowels = 'aeiou';

Object.values(obj).forEach(arr => {
  arr.forEach(word => {
    word.split('').forEach(char => {
      if (vowels.includes(char)) {
        console.log(char);
      }
    });
  });
});

*/