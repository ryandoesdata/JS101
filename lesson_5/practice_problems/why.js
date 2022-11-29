let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

// Works

arr.map(innerArray => {
  if (typeof innerArray[0] === 'string') {
    return innerArray.slice().sort();
  } else {
    return innerArray.slice().sort((a, b) => a - b);
  }
});

// Does Not Work

arr.map(innerArray => {
  if (typeof innerArray[0] === Number) {
    return innerArray.slice().sort((a, b) => a - b);
  } else {
    return innerArray.slice().sort();
  }
});