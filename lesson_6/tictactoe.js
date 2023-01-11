/* eslint-disable max-lines-per-function */
/* eslint-disable max-len */
const readline = require('readline-sync');
const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const GAMES_TO_WIN = 2;
const STARTING_PLAYER = 'choose';
const WINNING_LINES = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9], // rows
  [1, 4, 7], [2, 5, 8], [3, 6, 9], // columns
  [1, 5, 9], [3, 5, 7]             // diagonals
];

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

function alternatePlayer(string) {
  return string === 'computer' ? "player" : "computer";
}

function chooseSquare(board, player) {
  if (player === 'player') {
    playerChoosesSquare(board);
  } else if (player === 'computer') {
    computerChoosesSquare(board);
  }
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

  for (let line = 0; line < WINNING_LINES.length; line++) {
    let [ sq1, sq2, sq3 ] = WINNING_LINES[line];
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

function findAtRiskSquare(line, board, marker) {
  let markersInLine = line.map(square => board[square]);

  if (markersInLine.filter(val => val === marker).length === 2) {
    let unusedSquare = line.find(square => board[square] === INITIAL_MARKER);
    if (unusedSquare !== undefined) {
      return unusedSquare;
    }
  }

  return null;
}

/*
function attackSquare(line, board) {
  let markersInLine = line.map(square => board[square]);

  if (markersInLine.filter(val => val === COMPUTER_MARKER).length === 2) {
    let unusedSquare = line.find(square => board[square] === INITIAL_MARKER);
    if (unusedSquare !== undefined) {
      return unusedSquare;
    }
  }

  return null;
}
*/

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

// eslint-disable-next-line max-statements
function computerChoosesSquare(board) {
  let square;
  for (let index = 0; index < WINNING_LINES.length; index++) {
    let line = WINNING_LINES[index];
    square = findAtRiskSquare(line, board, COMPUTER_MARKER);
    if (square) break;
  }

  if (!square) {
    for (let index = 0; index < WINNING_LINES.length; index++) {
      let line = WINNING_LINES[index];
      square = findAtRiskSquare(line, board, HUMAN_MARKER);
      if (square) break;
    }
  }

  if (!square) {
    if (emptySquares(board).includes('5')) {
      square = '5';
    }
  }

  if (!square) {
    let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
    square = emptySquares(board)[randomIndex];
  }

  board[square] = COMPUTER_MARKER;
}

while (true) {
  let board = initializeBoard();
  let currentPlayer;
  let answer;

  /* Use if starting player is fixed.

    if (STARTING_PLAYER === 'player') {
      playerChoosesSquare(board);
      if (someoneWon(board) || boardFull(board)) break;
      computerChoosesSquare(board);
      displayBoard(board);
      if (someoneWon(board) || boardFull(board)) break;
    } else if (STARTING_PLAYER === 'computer') {
      computerChoosesSquare(board);
      displayBoard(board);
      if (someoneWon(board) || boardFull(board)) break;
      playerChoosesSquare(board);
      if (someoneWon(board) || boardFull(board)) break;

    */

  // good user decider for starting player
  while (true) {
    console.log("Who is going to start? Choose computer or player");
    currentPlayer = readline.question().trim();

    if (["computer", "player"].includes(currentPlayer)) break;
    console.log("Sorry, that's not a valid choice.");
  }

  while (true) {
    displayBoard(board);
    chooseSquare(board, currentPlayer);
    currentPlayer = alternatePlayer(currentPlayer);
    if (someoneWon(board) || boardFull(board)) {
      displayBoard(board);
      break;
    }
  }

  /* My complicated user decider for starting player (only works for P or invalid choice. not C).

    } else if (STARTING_PLAYER === 'choose') {
      prompt('Who will go first? Enter P for player, C for computer.');
      response = readline.question().trim();
      if (response !== (('P') || ('C'))) {
        while (true) {
          prompt("That's not a valid choice.");
          prompt('Who will go first? Enter P for player, C for computer.');
          response = readline.question().trim();
          if (response === (('P') || ('C'))) break;
        }
      }
      if (response === 'P') {
        while (true) {
          playerChoosesSquare(board);
          if (someoneWon(board) || boardFull(board)) break;
          computerChoosesSquare(board);
          displayBoard(board);
          if (someoneWon(board) || boardFull(board)) break;
        }
        break;
      }
      if (response === 'C') {
        while (true) {
          computerChoosesSquare(board);
          displayBoard(board);
          if (someoneWon(board) || boardFull(board)) break;
          playerChoosesSquare(board);
          if (someoneWon(board) || boardFull(board)) break;
        }
        break;
      }
    }
  }

  */

  if (someoneWon(board)) {
    prompt(`${detectWinner(board)} won!`);
  } else {
    prompt("It's a tie!");
  }

  //Loops invalid input when invalid input is entered followed by 'n'. Works otherwise.
  while (true) {
    prompt('Would you like to play again? y/n');
    answer = readline.question().toLowerCase()[0];
    if (["y", "n"].includes(answer)) break;
    prompt('Error, please enter valid input.');
  }
  if (answer === ('n')) break;
  else if (answer === ('y')) continue;
  //if (answer === ('n' || 'N')) break;
}

prompt('Thanks for playing!');