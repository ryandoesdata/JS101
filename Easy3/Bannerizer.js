const defaultBox = ('+----+\n|    |\n| ab |\n|    |\n+----+');

function logInBox(words)  {
  let firstAndFifthLines = (['+', '-', '-', '+']);
  let secondAndFourthLines = (['|', ' ', ' ', '|']);
  for (let i = 0; i < words.length; i += 1)  {
    firstAndFifthLines.splice(1, 0, '-');
    secondAndFourthLines.splice(1, 0, ' ');
  }
  console.log(`${firstAndFifthLines.join('')}\n${secondAndFourthLines.join('')}\n| ${words} |\n${secondAndFourthLines.join('')}\n${firstAndFifthLines.join('')}`);
}

logInBox('hello');

