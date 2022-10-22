const LANGUAGE = 'en';

const readline = require('readline-sync');

const MESSAGES = require('./mortgage_calculator.json');

function messages(message, lang = 'en') {
  return MESSAGES[lang][message];
}

function prompt(key) {
  let message = messages(key, LANGUAGE);
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return Number.isNaN(Number(number));
}

while (true) {

  prompt('firstNumber');
  let loanAmount = readline.question();

  while (invalidNumber(loanAmount)) {
    prompt('validNumber');
    loanAmount = readline.question();
  }

  prompt('secondNumber');
  let APR = readline.question();

  while (invalidNumber(APR)) {
    prompt('validNumber');
    APR = readline.question();
  }

  prompt('thirdNumber');
  let loanDuration = readline.question();

  while (invalidNumber(loanDuration)) {
    prompt('validNumber');
    loanDuration = readline.question();
  }

  let monthlyInterest = (APR / 1200);

  let splitEquation = (1 - Math.pow((1 + monthlyInterest), (-loanDuration)));

  let monthlyPayment = (loanAmount * (monthlyInterest / splitEquation));

  let twoDecimalMonthlyPayment = ((Math.round(monthlyPayment * 100)) / 100);

  console.log(`This month's payment is $${twoDecimalMonthlyPayment}`);

  prompt('repeat');
  let answer = readline.question();

  while (!['1', '2'].includes(answer)) {
    prompt('yesOrNo');
    answer = readline.question();
  }

  if (answer !== '1') break;
}

console.log("Thanks for using Mortgage Calculator!");