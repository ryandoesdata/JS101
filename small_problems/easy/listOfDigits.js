function digitList(num) {
  let stringArr = String(num).split('');
  let numberArr = stringArr.map(char => Number(char));
  return numberArr;
}

console.log(digitList(23432));

