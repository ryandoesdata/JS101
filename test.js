//test.js

function joinOr(empties, delimiter, replaceOr) {
  const lastNumber = empties[empties.length];
  const withoutLastNumber = empties.slice(0, lastNumber);

  if ((delimiter && replaceOr) === undefined) {
    console.log(`${withoutLastNumber.join(', ')}, or ${lastNumber}`);
  } else if (replaceOr === undefined) {
    console.log(`${withoutLastNumber.join(`${delimiter}`)}${delimiter} or ${lastNumber}`);
  } else if (empties === []) {
    console.log("");
  } else if (empties.length === 1) {
    console.log(`${empties}`);
  } else if (empties.length === 2) {
    console.log(`${empties[0]} or ${empties[1]}`);
  }
}

joinOr([1, 2, 3, 5, 6]);