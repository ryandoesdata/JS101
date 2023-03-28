let numbers = { one: 1, two: 2, three: 3, four: 4 };

let extractedNumbers = extract(numbers);
console.log(numbers); // { one: 1, two: 2, three: 3, four: 4 }
console.log(extractedNumbers); // { two: 2, four: 4 }

function extract(obj) {
  let keys = Object.keys(obj);
  let evens = {};

  for (i = 0; i < keys.length; i++) {
    let currentKey = keys[i];
    let currentValue = obj[currentKey];
    if (currentValue % 2 === 0) {
      evens[currentKey] = currentValue;
    }
  }
  return evens;
}

console.log(extract(numbers));