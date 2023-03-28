let numbers = { one: 1, two: 2, three: 3, four: 4 };

//let extractedNumbers = extract(numbers);
//console.log(numbers); // { one: 1, two: 2, three: 3, four: 4 }
//console.log(extractedNumbers); // { two: 2, four: 4 }

console.log(Object.keys(numbers));

function extract (obj) {
  let keysArr = Object.keys(obj);
  let evens = {};
  // eslint-disable-next-line id-length
  for (let i = 0; i < keysArr.length; i++) {
    let currentKey = keysArr[i];
    let currentValue = obj[currentKey];

    if (currentValue % 2 === 0) {
      evens[currentKey] = currentValue;
    }
  }
  return evens;
}

console.log(extract(numbers));