let arr = ['10', '11', '9', '7', '8'];

let sortedStrings = (arr.sort((a, b) => b - a)).map(string => Number(string));

console.log(sortedStrings);