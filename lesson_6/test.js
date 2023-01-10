/* eslint-disable indent */
const readline = require('readline-sync');

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
  {A: 10}, {A: 10}, {A: 10}, {A: 10}
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

let playerHand = [];
let dealerHand = [];

function getHand (whoGoes, whoseHand) {
  for (let i = 0; i < whoGoes.length; i++) {
    whoseHand.push(Number(Object.values(whoGoes[i])));
  }
  whoseHand = whoseHand.flat();
}

function hit (whoGoes, whoseHand) {
  whoseHand.push(Number(Object.values(whoGoes[whoGoes.length - 1])));
  whoseHand = whoseHand.flat();
}

function addCards (hand) {
  let pointTotal =
  hand.reduce((accumulator, currentValue) => accumulator + currentValue
  );
  return pointTotal;
}

player = dealCards (deck, player, 2);
dealer = dealCards (deck, dealer, 2);

getHand(player, playerHand);
getHand(dealer, dealerHand);

function displayWholeHand(who, whoseHand) {
  console.log(`${who}'s hand: ${whoseHand.join(' and ')}`);
}

function displayDealerHand(who, whoseHand) {
  console.log(`${who}'s hand: ${whoseHand[0]} and unknown card`);
}

displayWholeHand('Player', playerHand);
displayDealerHand('Dealer', dealerHand);

let playerTotal = addCards(playerHand);
let dealerTotal = addCards(dealerHand);

while (true) {
  prompt(`You have ${playerTotal}.`);
  prompt('Would you like to hit or stay?');
  let playerMove = readline.question().trim().toLowerCase();

  if (playerMove === "hit") {
    player = dealCards(deck, player, 1);
    hit(player, playerHand);
    displayWholeHand('Player', playerHand);
    playerTotal = addCards(playerHand);

  } else if (playerMove === "stay") {

    while (dealerTotal < 18) {
      dealer = dealCards(deck, dealer, 1);
      hit(dealer, dealerHand);
      //displayWholeHand('Dealer', dealerHand);
      dealerTotal = Number(addCards(dealerHand));
      //prompt(`Dealer has ${dealerTotal}.`);
    }

      if ((dealerTotal > playerTotal) && (dealerTotal <= 21)) {
        displayWholeHand('Dealer', dealerHand);
        prompt(`Dealer has ${dealerTotal}.`);
        prompt("Dealer wins.");
      } else if ((playerTotal > dealerTotal) && (playerTotal <= 21)) {
        displayWholeHand('Dealer', dealerHand);
        prompt(`Dealer has ${dealerTotal}.`);
        prompt("You win!");
      } else if (dealerTotal > 21) {
        displayWholeHand('Dealer', dealerHand);
        prompt(`Dealer has ${dealerTotal}.`);
        prompt("Dealer busts. You win!");
      }

    break;
  }

  if (playerTotal > 21) {
    prompt(`You have ${playerTotal}.`);
    prompt("Bust. Dealer wins.");
    break;
  }
}