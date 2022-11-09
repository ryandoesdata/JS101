let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

let produceKeyValues = Object.entries(produce);
let onlyVegetablesArr = produceKeyValues.filter(keyValue => {
  // eslint-disable-next-line no-unused-vars
  let [ key, value ] = keyValue;
  return value === 'Vegetable';
});

let onlyVegetables = {};

onlyVegetablesArr.forEach(keyValue => {
  let [ key, value ] = keyValue;

  //what happens here???
  onlyVegetables[key] = value;
});

// eslint-disable-next-line no-unused-expressions
onlyVegetables; // => {carrot: 'Vegetable', broccoli: 'Vegetable'}