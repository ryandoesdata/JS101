/*
MY COMPUTER DEFENCE FUNCTION

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