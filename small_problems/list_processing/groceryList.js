/*
function buyFruit (arr) {
  let list = [];
  arr.forEach((ele) => {
    let idx = 0;
    while (idx < ele[1]) {
      list.push(ele[0]);
      idx += 1;
    }
  });
  console.log(list);
}


function buyFruit(arr) {
  let fruits = [];
  arr.forEach((nestedArr) => {
    nestedArr.forEach((value) => {
      while (nestedArr[1] !== 0) {
        fruits.push(value);
        nestedArr[1] -= 1;
      }
    });
  });
  console.log(fruits);
}

buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]);
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]


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