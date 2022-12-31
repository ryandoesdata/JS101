function joinOr(empties, delimiter, replaceOr) {
  const withoutLastNumber = empties.slice(0, empties.length - 1);
  const lastNumber = empties[empties.length - 1];

  if ((delimiter && replaceOr) === undefined) {
    console.log(`${withoutLastNumber.join(', ')} or ${lastNumber}`); // works
  } else if (replaceOr === undefined) {
    console.log(`${withoutLastNumber.join(delimiter)} or ${lastNumber}`); // doesn't work
  } else if (empties.length === 0) {
    console.log(""); // works
  } else if (empties.length === 1) {
    console.log(`${empties}`); // works
  } else if (empties.length === 2) {
    console.log(`${empties[0]} or ${empties[1]}`);  // works
  } else {
    console.log(`${withoutLastNumber.join(delimiter)}${delimiter}${replaceOr} ${lastNumber}`); // works
  }
}

joinOr([1, 2, 3, 4, 5, 6], '; ');