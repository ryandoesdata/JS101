function twice(number) {
  
  let firstHalf = [];
  let secondHalf = [];
  
  let numberString = number.toString();
  let array = numberString.split('');
  let arrayOne = ((array.length) / 2);
  let fullArray = array.length;
    
  for (let i = 0; i < arrayOne; i += 1) {
    firstHalf.push(array[i]);
  }
  for (let i = arrayOne; i < fullArray; i += 1) {
    secondHalf.push(array[i]);
  }
  
  let firstHalfNum = parseInt(firstHalf.join(''));
  let secondHalfNum = parseInt(secondHalf.join(''));

  if (firstHalfNum === secondHalfNum) {
    console.log(number);
  } else {
    console.log(number * 2);
  }
};

twice(88);  