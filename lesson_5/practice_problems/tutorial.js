// One way to rewrite the code so it might be easier to follow: 
let innerArray1 = [1, 2];
let innerArray2 = [3, 4];
let outerArray = [innerArray1, innerArray2]; // [[1, 2], [3, 4]]

let transformedArray = outerArray.map(innerArray => {
// print the value of each `innerArray` to see what it is
  //console.log(innerArray);
  // We get `[1, 2]` on `map`'s first execution.
  // We get `[3, 4]` on `map`'s second execution.
  
  // we use `map` again to get at each element of the inner array. 
  let newInnerArray = innerArray.map(num => {
    // print the value of each `num` to see what it is
   // console.log(num);

    let doubledNum = num * 2;
    return doubledNum;
  });
  // Now print `newInnerArray` to see how the initial `innerArray`
  // has been transformed (and to verify your results from the inner `map`). 
 // console.log(newInnerArray);
  // We get `[2, 4]` on first map iteration.
  // We get `[6, 8]` on second map iteration.

  return newInnerArray;
});

// Since `map` will make a new array from its return values
// `[2, 4]` is the first element and
// `[6, 8]` is the second element.
// This gives us a final return value of [[2, 4], [6, 8]]
console.log(transformedArray); // [[2, 4], [6, 8]]
