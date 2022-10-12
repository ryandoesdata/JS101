let oneZeroArray = [];
function stringy(num) {
  for (let i = num; i > 0; i -= 1) {
    if (i % 2 === 0) {
    oneZeroArray.push(0);
  } else {
    oneZeroArray.push(1);
  }
}
console.log(oneZeroArray.join(''));
}


stringy(10)