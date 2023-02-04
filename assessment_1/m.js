const readline = require('readline-sync');
prompt("How much time is left?");
let timeLeft = readline.question();
prompt("How many questions are left?");
let questionsLeft = readline.question();

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function timePerQuestion(timeLeft, questionsLeft) {
  if (timeLeft > 99) {
    timeLeft -= 40;
  }
  console.log(timeLeft / questionsLeft);
}

timePerQuestion(timeLeft, questionsLeft);