/* eslint-disable max-lines-per-function */
/* eslint-disable max-len */
const readline = require('readline-sync');
const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const GAMES_TO_WIN = 2;
const STARTING_PLAYER = 'player';
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

let board = initializeBoard();
displayBoard(board);


while (true) {
  let board = initializeBoard();
  let response;

  while (true) {
    displayBoard(board);
      
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

  if (someoneWon(board)) {
    prompt(`${detectWinner(board)} won!`);
  } else {
    prompt("It's a tie!");
  }

  let answer;

  while (true) {
    console.log('Would you like to play again? y/n');
    let answer = readline.question().toLowerCase()[0];
    if (["y", "n"].includes(answer)) break;
    console.log("not valid");
  }
}

console.log("Thanks for playing");

/* MY COMPUTER DEFENCE FUNCTION

function computerDefence(board) {
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
      board[sq2] === HUMAN_MARKER) {
      console.log(board[sq3]);
    } else {
      return false;
    }
  }
  return null;
}

-----MY KEEPSCORE FUNCTION-----

function keepScore(winner, playerScore, computerScore) {

// let playerScore = 0;
// let computerScore = 0;

  if (winner === 'Player') {
    playerScore += (playerScore + 1);
  } else if (winner === 'Computer') {
    computerScore += (computerScore + 1);
  }

  if (playerScore === GAMES_TO_WIN) {
    console.log('Player wins the match!');
    //playerScore = 0;
    //computerScore = 0;
  } else if (computerScore === GAMES_TO_WIN) {
    console.log('Computer wins the match!');
    //playerScore = 0;
    //computerScore = 0;
  }
  console.log(`Player: ${playerScore} Computer: ${computerScore}`);
  return playerScore;
}

keepScore(detectWinner(board));

------MY JOIN OR FUNCTION------

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