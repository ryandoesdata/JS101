function century(year) {
  let withRemainder = (year % 100);
  
  if (withRemainder !== 0) {
    return (Math.floor((year / 100) + 1));
  } else {
    return (year / 100);
  }
}

  let centNum = century;

  let centuryString = toString.centNum;
  let yearArray = centuryString.split('');
  let i = yearArray.length - 1;
  let j = yearArray.length - 2;
    if (yearArray[i] === '1') {
      console.log(`${centNum}st`);
  } else if (yearArray[i] === '2') {
      console.log(`${centNum}nd`);
  } else if (yearArray[i] === '3') {
      console.log(`${centNum}rd`);
  } else if (yearArray[i] && yearArray[j] === '1') {
      console.log(`${centNum}th`); 
  } else {
    console.log(`${centNum}th`);
  }
  console.log(century(year));

  century(120);