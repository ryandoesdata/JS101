const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', 
'9', '-9', '-8', '-7', '-6', '-5', '-4', '-3', '-2', '-1'];

function integerToString(number) {
  let result = '';

  do {
    let remainder = (number % 10);
    number = Math.floor(number / 10);

    result = DIGITS[remainder] + result;
  } while (number === true);

  return result;
};

console.log(integerToString(-10));
