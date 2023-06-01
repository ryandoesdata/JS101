let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 20 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];


function transactionsFor(idNum, transactions) {
  return transactions.filter(ele => ele["id"] === idNum);
}
function isItemAvailable(idNum, transactions) {
  let itemLog = transactionsFor(idNum, transactions);
  let countIn = 0;
  let countOut = 0;

  itemLog.forEach((ele) => {
    if (ele.movement === 'in') {
      countIn += ele.quantity;
    } else {
      countOut += ele.quantity;
    }
  });
  return countIn > countOut
}

console.log(isItemAvailable(103, transactions));

/*
function transactionsFor (id, transactions) {
  let arr = [];
  transactions.forEach((obj) => {
    if (obj.id === id) {
      arr.push(obj);
    }
  });
  return arr;
}

function isItemAvailable (id, transactions) {
  let arr = transactionsFor(id, transactions);
  let quantities = [];

  function inOrOut(direction) {
    arr.forEach((obj) => {
      if (obj.movement === direction) {
        quantities.push(obj.quantity);
      }
    });
    const initialValue = 0;
    return quantities.reduce((accum, num) => accum + num, initialValue);
  }

  let quantitiesIn = inOrOut('in');
  quantities = [];
  let quantitiesOut = inOrOut('out');
  return quantitiesIn > quantitiesOut;
}

let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
  { id: 105, movement: 'in',  quantity: 10 },
  { id: 102, movement: 'out', quantity: 17 },
  { id: 101, movement: 'in',  quantity: 12 },
  { id: 103, movement: 'out', quantity: 20 },
  { id: 102, movement: 'out', quantity: 15 },
  { id: 105, movement: 'in',  quantity: 25 },
  { id: 101, movement: 'out', quantity: 18 },
  { id: 102, movement: 'in',  quantity: 22 },
  { id: 103, movement: 'out', quantity: 15 }, ];

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(103, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true
// returns
// [ { id: 101, movement: "in",  quantity:  5 },
//   { id: 101, movement: "in",  quantity: 12 },
//   { id: 101, movement: "out", quantity: 18 }, ]
*/