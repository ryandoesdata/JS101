let innerObject1 = { a: 1 };
let innerObject2 = { b: 2, c: 3 };
let innerObject3 = { d: 4, e: 5, f: 6};
let outerArray = [innerObject1, innerObject2, innerObject3];

let newArr = outerArray.map(obj => {
  let incrementedObj = {};

  for (let key in obj) {
    incrementedObj[key] = obj[key] + 1;
  }

  return incrementedObj;
});

console.log(newArr);