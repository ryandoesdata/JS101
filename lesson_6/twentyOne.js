/* eslint-disable indent */
const readline = require('readline-sync');

// Stylizes prompt
function prompt(msg) {
  console.log(`=> ${msg}`);
}

// initialize deck

let deck = [
  {2: 2}, {2: 2}, {2: 2}, {2: 2},
  {3: 3}, {3: 3}, {3: 3}, {3: 3},
  {4: 4}, {4: 4}, {4: 4}, {4: 4},
  {5: 5}, {5: 5}, {5: 5}, {5: 5},
  {6: 6}, {6: 6}, {6: 6}, {6: 6},
  {7: 7}, {7: 7}, {7: 7}, {7: 7},
  {8: 8}, {8: 8}, {8: 8}, {8: 8},
  {9: 9}, {9: 9}, {9: 9}, {9: 9},
  {10: 10}, {10: 10}, {10: 10}, {10: 10},
  {J: 10}, {J: 10}, {J: 10}, {J: 10},
  {Q: 10}, {Q: 10}, {Q: 10}, {Q: 10},
  {K: 10}, {K: 10}, {K: 10}, {K: 10},
  {A: 11}, {A: 11}, {A: 11}, {A: 11}
];

// deal hands

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
  return pointTotal;
}

player = dealCards (deck, player, 2);
dealer = dealCards (deck, dealer, 2);

//start here for objects

getValues(player, playerValues);
getValues(dealer, dealerValues);
getKeys(player, playerKeys);
getKeys(dealer, dealerKeys);

function displayWholeHand(who, whoseHand) {
  if (whoseHand.length === 2) {
  prompt(`${who}'s hand: ${whoseHand.join(' and ')}`);
  } else {
    prompt(`${who}'s hand: ${whoseHand.slice(0, whoseHand.length - 1).join(', ')}, and ${whoseHand[whoseHand.length - 1]}`);
  }
}

function displayDealerHand(who, whoseHand) {
  prompt(`${who}'s hand: ${whoseHand[0]} and unknown card`);
}

displayWholeHand('Player', playerKeys);
displayDealerHand('Dealer', dealerKeys);

let playerTotal = addCards(playerValues);
let dealerTotal = addCards(dealerValues);

while (true) {

  let playerMove;

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
    hitKey (player, playerKeys);
    displayWholeHand('Player', playerKeys);
    playerTotal = addCards(playerValues);

  } else if (playerMove === "stay") {

    while (dealerTotal < 18) {
      dealer = dealCards(deck, dealer, 1);
      hitValue(dealer, dealerValues);
      hitKey (dealer, dealerKeys);
      //displayWholeHand('Dealer', dealerHand);
      dealerTotal = Number(addCards(dealerValues));
      //prompt(`Dealer has ${dealerTotal}.`);
    }

      if (dealerTotal > 21) {
        displayWholeHand('Dealer', dealerKeys);
        prompt(`Dealer has ${dealerTotal}.`);
        prompt("Dealer busts. You win!");
      } else if (playerTotal > dealerTotal) {
        displayWholeHand('Dealer', dealerKeys);
        prompt(`Dealer has ${dealerTotal}.`);
        prompt("You win!");
      } else if (dealerTotal > playerTotal) {
        displayWholeHand('Dealer', dealerKeys);
        prompt(`Dealer has ${dealerTotal}.`);
        prompt("Dealer wins.");
      } else if (dealerTotal === playerTotal) {
        displayWholeHand('Dealer', dealerKeys);
        prompt(`It's a tie.`);
      }

    break;
  }

  if (playerTotal > 21) {
    prompt(`You have ${playerTotal}.`);
    prompt("Bust. Dealer wins.");
    break;
  }
}