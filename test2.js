const RPSGame = {
  human: createPlayer(),
  computer: createPlayer(),

  displayWelcomeMessage() {
    console.log('Welcome to Rock, Paper, Scissors!');
  },

  displayGoodbyeMessage() {
    console.log('Thanks for playing Rock, Paper, Scissors. Goodbye!');
  },

  play() {
    this.displayWelcomeMessage();
    this.human.choose();
    this.computer.choose();
    displayWinner();
    this.displayGoodbyeMessage();
  },
};

function createPlayer() {
  return {
    // possible state: player name?
    // possible state: player's current move?
    playerType: playerType,

    choose() {
      // not yet implemented
    },
  };
}