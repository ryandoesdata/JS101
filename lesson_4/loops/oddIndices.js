let array = [1, 2, 3, 4, 5, 6];

function multiply(numbers, multiplyBy) {
  let multipliedNumbers = [];

  for (let counter = 0; counter < numbers.length; counter += 1) {
    let currentNumber = numbers[counter];
    multipliedNumbers.push(currentNumber * multiplyBy);
  }

  return multipliedNumbers;
}


console.log(multiply(array, 4));