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
  //console.log(whoseHand);
}

function hit (whoGoes, whoseHand) {
  whoseHand.push(Number(Object.values(whoGoes[whoGoes.length - 1])));
  whoseHand = whoseHand.flat();
  //console.log(whoseHand);
}

function addCards (hand) {
  let pointTotal =
  hand.reduce((accumulator, currentValue) => accumulator + currentValue
  );
  return pointTotal;
}

player = dealCards(deck, player, 2);
dealer = dealCards(deck, dealer, 2);

getHand(player, playerHand);
getHand(dealer, dealerHand);

function displayHand (who, whoseHand) {
  console.log(`${who}'s hand: ${whoseHand.join(', ')}`);
}

displayHand('Player', playerHand);
displayHand ('Dealer', dealerHand);

let playerTotal = addCards(playerHand);
let dealerTotal = addCards(dealerHand);

while (true) {
  prompt(`You have ${playerTotal}. Dealer has ${dealerTotal}.`);
  prompt('Would you like to hit or stay?');
  let playerMove = readline.question().trim().toLowerCase();
  if (playerMove === "hit") {
    player = dealCards(deck, player, 1);
    dealer = dealCards(deck, dealer, 1);
    hit(player, playerHand);
    hit(dealer, dealerHand);
    displayHand ('Player', playerHand);
    displayHand ('Dealer', dealerHand);
    playerTotal = addCards(playerHand);
    dealerTotal = addCards(dealerHand);
  } else if (playerMove === "stay") {
    console.log(playerHand);
    console.log(dealerHand);
    break;
  }
}