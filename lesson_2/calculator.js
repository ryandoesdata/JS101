const LANGUAGE = 'en';

const readline = require('readline-sync');

const MESSAGES = require('./calculator_messages.json');

function messages(message, lang = 'en') {
  return MESSAGES[lang][message];
}

function prompt(key) {
  let message = messages(key, LANGUAGE);
  console.log(`=> ${message}`);
}

prompt('Welcome');
let name = readline.question();

while (name.trim() === '') {
  prompt('validName');
  name = readline.question();
}

while (true) {

  // eslint-disable-next-line no-inner-declarations
  function invalidNumber(number) {
    return Number.isNaN(Number(number));
  }

  prompt('firstNumber');
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt('validNumber');
    number1 = readline.question();
  }

  prompt('secondNumber');
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt('validNumber');
    number2 = readline.question();
  }

  prompt('operations');
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt('numCheck');
    operation = readline.question();
  }

  let output;
  switch (operation) {
    case '1':
      output = Number(number1) + Number(number2);
      break;
    case '2':
      output = Number(number1) - Number(number2);
      break;
    case '3':
      output = Number(number1) * Number(number2);
      break;
    case '4':
      output = Number(number1) / Number(number2);
      break;
  }

  prompt(`The result is: ${output}`);

  prompt('repeat');
  let answer = readline.question();

  while (!['1', '2'].includes(answer)) {
    prompt('yesOrNo');
    answer = readline.question();
  }

  if (answer !== '1') break;
}
console.log("Thanks for using Calculator!");