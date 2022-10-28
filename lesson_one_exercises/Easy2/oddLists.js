function oddities(array) {
  let oddArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      oddArray.push(array[i]);
    }
  }
  return oddArray;
};

console.log(oddities([5, 1, 2, 3, 4, 5, 6]));
