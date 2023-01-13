const readline = require('readline-sync');

function prompt(msg) {
  console.log(`=> ${msg}`);
}

let deck = [
  {"2 of clubs": 2}, {"2 of hearts": 2}, {"2 of diamonds": 2}, {"2 of spades": 2},
  {"3 of clubs": 3}, {"3 of hearts": 3}, {"3 of diamonds": 3}, {"3 of spades": 3},
  {"4 of clubs": 4}, {"4 of hearts": 4}, {"4 of diamonds": 4}, {"4 of spades": 4},
  {"5 of clubs": 5}, {"5 of hearts": 5}, {"5 of diamonds": 5}, {"5 of spades": 5},
  {"6 of clubs": 6}, {"6 of hearts": 6}, {"6 of diamonds": 6}, {"6 of spades": 6},
  {"7 of clubs": 7}, {"7 of hearts": 7}, {"7 of diamonds": 7}, {"7 of spades": 7},
  {"8 of clubs": 8}, {"8 of hearts": 8}, {"8 of diamonds": 8}, {"8 of spades": 8},
  {"9 of clubs": 9}, {"9 of hearts": 9}, {"9 of diamonds": 9}, {"9 of spades": 9},
  {"10 of clubs": 10}, {"10 of hearts": 10}, {"10 of diamonds": 10}, {"10 of spades": 10},
  {"Jack of clubs": 10}, {"Jack of hearts": 10}, {"Jack of diamonds": 10}, {"Jack of spades": 10},
  {"Queen of clubs": 10}, {"Queen of hearts": 10}, {"Queen of diamonds": 10}, {"Queen of spades": 10},
  {"King of clubs": 10}, {"King of hearts": 10}, {"King of diamonds": 10}, {"King of spades": 10},
  {"Ace of clubs": 11}, {"Ace of hearts": 11}, {"Ace of diamonds": 11}, {"Ace of spades": 11}
];

let player = [];
let dealer = [];

function dealCards (deck, whoGoes, cards) {
  let i = 0;
  while (i < cards) {
    whoGoes.push(deck.splice(Math.floor(Math.random() * deck.length), 1));
    whoGoes = whoGoes.flat();
    i++;
  }
  return whoGoes;
}

let playerValues = [];
let dealerValues = [];

function getValues (whoGoes, whoseValues) {
  for (let i = 0; i < whoGoes.length; i++) {
    whoseValues.push(Number(Object.values(whoGoes[i])));
  }
  whoseValues = whoseValues.flat();
}

let playerKeys = [];
let dealerKeys = [];

function getKeys (whoGoes, whoseKeys) {
  for (let i = 0; i < whoGoes.length; i++) {
    whoseKeys.push(Object.keys(whoGoes[i]));
  }
  whoseKeys = whoseKeys.join(', ');
}

function hitValue (whoGoes, whoseValues) {
  whoseValues.push(Number(Object.values(whoGoes[whoGoes.length - 1])));
  whoseValues = whoseValues.flat();
}

function hitKey (whoGoes, whoseKeys) {
  whoseKeys.push(Object.keys(whoGoes[whoGoes.length - 1]));
  whoseKeys = whoseKeys.flat();
}

function addCards (hand) {
  let pointTotal =
  hand.reduce((accumulator, currentValue) => accumulator + currentValue
  );
  hand.filter(value => value === 11).forEach(_ => {
    if (pointTotal > 21) pointTotal -= 10;
  });
  return pointTotal;
}

function displayWholeHand(who, whoseHand) {
  if (whoseHand.length === 2) {
    prompt(`${who}'s hand: ${whoseHand.join(' and ')}.`);
  } else {
    prompt(`${who}'s hand: ${whoseHand.slice(0, whoseHand.length - 1).join(', ')}, and ${whoseHand[whoseHand.length - 1]}.`);
  }
}

function displayDealerHand(who, whoseHand) {
  prompt(`${who}'s hand: ${whoseHand[0]} and unknown card.`);
}

while (true) {
  let playerMove;
  let answer;

  player = [];
  dealer = [];
  playerValues = [];
  playerKeys = [];
  dealerValues = [];
  dealerKeys = [];

  player = dealCards (deck, player, 2);
  dealer = dealCards (deck, dealer, 2);

  getValues(player, playerValues);
  getValues(dealer, dealerValues);
  getKeys(player, playerKeys);
  getKeys(dealer, dealerKeys);

  displayWholeHand('Player', playerKeys);
  displayDealerHand('Dealer', dealerKeys);

  let playerTotal = addCards(playerValues);
  let dealerTotal = addCards(dealerValues);

  while (true) {
    while (true) {
      prompt(`You have ${playerTotal}.`);
      prompt('Would you like to hit or stay?');
      playerMove = readline.question().trim().toLowerCase();
      if (["hit", "stay"].includes(playerMove)) break;
      prompt("Sorry, that's not a valid choice.");
    }

    if (playerMove === "hit") {
      player = dealCards(deck, player, 1);
      hitValue(player, playerValues);
      hitKey(player, playerKeys);
      displayWholeHand('Player', playerKeys);
      playerTotal = addCards(playerValues);
      if (playerTotal < 22) {
        displayDealerHand('Dealer', dealerKeys);
      }
    } else if (playerMove === "stay") {

      while (dealerTotal < 18) {
        dealer = dealCards(deck, dealer, 1);
        hitValue(dealer, dealerValues);
        hitKey (dealer, dealerKeys);
        dealerTotal = Number(addCards(dealerValues));
      }

      if (dealerTotal > 21) {
        displayWholeHand('Dealer', dealerKeys);
        prompt(`You have ${playerTotal}.`);
        prompt(`Dealer has ${dealerTotal}.`);
        prompt("Dealer busts. You win!");
        break;
      } else if (playerTotal > dealerTotal) {
        displayWholeHand('Dealer', dealerKeys);
        prompt(`You have ${playerTotal}.`);
        prompt(`Dealer has ${dealerTotal}.`);
        prompt("You win!");
        break;
      } else if (dealerTotal > playerTotal) {
        displayWholeHand('Dealer', dealerKeys);
        prompt(`You have ${playerTotal}.`);
        prompt(`Dealer has ${dealerTotal}.`);
        prompt("Dealer wins.");
        break;
      } else if (dealerTotal === playerTotal) {
        prompt(`You have ${playerTotal}.`);
        displayWholeHand('Dealer', dealerKeys);
        prompt(`It's a tie.`);
        break;
      }
    }
    if (playerTotal > 21) {
      displayWholeHand('Dealer', dealerKeys);
      prompt(`You have ${playerTotal}.`);
      prompt("Bust. Dealer wins.");
      break;
    }
  }

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