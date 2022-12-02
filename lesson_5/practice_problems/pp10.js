let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

let descendingArray = arr.map(innerArray => {
  if (typeof innerArray[0] === 'string') {
    return innerArray.slice().sort().reverse();
  } else {
    return innerArray.slice().sort((a, b) => b - a);
  }
});

console.log(descendingArray);