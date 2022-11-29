let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

let newArr = arr.map(element => {
  element.forEach(value => {
    arr[element].value += 1;
  });
});

console.log(newArr);