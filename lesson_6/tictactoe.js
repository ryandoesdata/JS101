const readline = require('readline-sync');
const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';

function displayBoard(board) {
  console.clear();

  console.log(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}.`);

  console.log('');
  console.log('     |     |');
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}`);
  console.log('     |     |');
  console.log('');
}

function initializeBoard() {
  let board = {};

  for (let square = 1; square <= 9; square++) {
    board[String(square)] = INITIAL_MARKER;
  }

  return board;
}

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function emptySquares(board) {
  return Object.keys(board)
    .filter(key => board[key] === INITIAL_MARKER);
}

/*
function joinOr() {

  const emptySpaces = arguments[0];
  const lastNumber = emptySpaces[arguments.length];
  const withoutLastNumber = emptySpaces.slice(0, lastNumber);
  const delimiter = arguments[1];
  const replaceOr = arguments[2];

  if (arguments.length === 1) {
    console.log(`${withoutLastNumber.join(', ')}, or ${lastNumber}`);
  } else if (arguments.length === 2) {
    console.log(`${withoutLastNumber.join(delimiter)}${delimiter} or ${lastNumber}`);
  } else if (emptySpaces === []) {
    console.log("");
  } else if (emptySpaces.length === 1) {
    console.log(`${emptySpaces}`);
  } else if (emptySpaces.length === 2) {
    console.log(`${emptySpaces[0]} or ${emptySpaces[1]}`);
  }
}

function joinOr(empties, delimiter, replaceOr) {
  const withoutLastNumber = empties.slice(0, empties.length - 1);
  const lastNumber = empties[empties.length - 1];

  if ((delimiter && replaceOr) === undefined) {
    console.log(`${withoutLastNumber.join(', ')} or ${lastNumber}`); // works
  } else if (replaceOr === undefined) {
    console.log(`${withoutLastNumber.join(delimiter)} or ${lastNumber}`); // doesn't work
  } else if (empties.length === 0) {
    console.log(""); // works
  } else if (empties.length === 1) {
    console.log(`${empties}`); // works
  } else if (empties.length === 2) {
    console.log(`${empties[0]} or ${empties[1]}`);  // works
  } else {
    console.log(`${withoutLastNumber.join(delimiter)}${delimiter}${replaceOr} ${lastNumber}`); // works
  }
}
*/

function joinOr(arr, delimiter = '; ', word = 'and') {
  switch (arr.length) {
    case 0:
      return '';
    case 1:
      return `${arr[0]}`;
    case 2:
      return arr.join(` ${word} `);
    default:
      return arr.slice(0, arr.length - 1).join(delimiter) +
             `${delimiter}${word} ${arr[arr.length - 1]}`;
  }
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

function someoneWon(board) {
  return !!detectWinner(board);
}

// eslint-disable-next-line max-lines-per-function
function detectWinner(board) {
  let winningLines = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
  ];

  for (let line = 0; line < winningLines.length; line++) {
    let [ sq1, sq2, sq3 ] = winningLines[line];

    if (
      board[sq1] === HUMAN_MARKER &&
      board[sq2] === HUMAN_MARKER &&
      board[sq3] === HUMAN_MARKER
    ) {
      return 'Player';
    } else if (
      board[sq1] === COMPUTER_MARKER &&
      board[sq2] === COMPUTER_MARKER &&
      board[sq3] === COMPUTER_MARKER
    ) {
      return 'Computer';
    }
  }

  return null;
}

function playerChoosesSquare(board) {
  let square;

  while (true) {
    prompt(`Choose a square ${joinOr(emptySquares(board))}:`);
    square = readline.question().trim();
    if (emptySquares(board).includes(square)) break;

    prompt("That's not a valid choice.");
  }
  board[square] = HUMAN_MARKER;
}

function computerChoosesSquare(board) {

  let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
  let square = emptySquares(board)[randomIndex];

  board[square] = COMPUTER_MARKER;
}

let board = initializeBoard();
displayBoard(board);

while (true) {
  let board = initializeBoard();

  while (true) {
    displayBoard(board);

    playerChoosesSquare(board);
    if (someoneWon(board) || boardFull(board)) break;
    computerChoosesSquare(board);
    displayBoard(board);

    if (someoneWon(board) || boardFull(board)) break;
  }

  displayBoard(board);

  if (someoneWon(board)) {
    prompt(`${detectWinner(board)} won!`);
  } else {
    prompt("It's a tie!");
  }

  prompt('Would you like to play again? y/n');
  let answer = readline.question().toLowerCase()[0];
  if (answer !== 'y') break;
}

prompt('Thanks for playing!');