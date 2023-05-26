
function interleave(arr1, arr2) {
  let newArr = arr1.map((item, idx) => {
    return [item, arr2[idx]];
  });

  return newArr;
}

/*
  }
  let idx = 0;
  while (idx < arrOne.length) {
    newArr.push(arrOne[idx], arrTwo[idx]);
    idx += 1;
  }
  return (newArr);
}
*/

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"];