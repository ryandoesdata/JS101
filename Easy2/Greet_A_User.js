let rlSync = require('readline-sync');

let name = rlSync.question('What is your name? '); {
  let nameChar = name.split('');
  let lastChar = nameChar.length - 1;
  if (nameChar[lastChar] === "!") {
    nameChar.pop();
    let nameNoExclaim = nameChar.join('');
    console.log(`HELLO ${nameNoExclaim.toUpperCase()}. WHY ARE WE SCREAMING?`);
  } else {
      console.log(`Hello ${name}.`);
  };
};

