const arr = [];

function doubleArr(items) {
  items.forEach(items => arr.push(items * 2));
}

let arrOne = [1, 2, 3];

doubleArr(arrOne);

console.log(arr);