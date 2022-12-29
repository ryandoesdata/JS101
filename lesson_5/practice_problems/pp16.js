let arr = [['a', 1], ['b', 'two'], ['sea', {'c': 3}], ['D', ['a', 'b', 'c']]];

let obj = {};

arr.forEach(nestedArrays => {
  obj[nestedArrays[0]] = nestedArrays[1];
});

console.log(obj);

/*
  nestedArrs.forEach((keys) => {
    obj = obj[keys];
  });
});
*/

// need element 1 to equal element 2 for each subarray
