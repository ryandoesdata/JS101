// initialize deck

let deck = [
  {2: 2}, {2: 2}, {2: 2}, {2: 2}, {3: 3}, {3: 3}, {3: 3}, {3: 3},
  {4: 4}, {4: 4}, {4: 4}, {4: 4}, {5: 5}, {5: 5}, {5: 5}, {5: 5}, {6: 6},
  {6: 6}, {6: 6}, {6: 6}, {7: 7}, {7: 7}, {7: 7}, {7: 7}, {8: 8}, {8: 8},
  {8: 8}, {8: 8}, {9: 9}, {9: 9}, {9: 9}, {9: 9}, {J: 10}, {J: 10}, {J: 10},
  {J: 10}, {Q: 10}, {Q: 10}, {Q: 10}, {Q: 10}, {K: 10}, {K: 10},
  {K: 10}, {K: 10}, {A: 10}, {A: 10}, {A: 10}, {A: 10}
];
// deal hands

let player = [];
let dealer = [];

function dealCards (deck) {

  player.push(deck.splice(Math.floor(Math.random() * deck.length), 1));

  player = player.flat();

  player.push(deck.splice(Math.floor(Math.random() * deck.length), 1));

  player = player.flat();

  dealer.push(deck.splice(Math.floor(Math.random() * deck.length), 1));

  dealer = dealer.flat();

  dealer.push(deck.splice(Math.floor(Math.random() * deck.length), 1));

  dealer = dealer.flat();
}

let playerHand = [];
let dealerHand = [];

function displayCards (whoGoes, whoseHand) {

  for (let i = 0; i < whoGoes.length; i++) {
    whoseHand.push(Object.values(whoGoes[i]));
  }
  console.log(whoseHand.flat());
}

dealCards(deck);

displayCards(player, playerHand);

displayCards(dealer, dealerHand);

// Get hands to numbers