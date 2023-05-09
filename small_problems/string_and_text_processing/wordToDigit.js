/* eslint-disable max-lines-per-function */
function wordToDigit(string) {

  let arr = string.split(' ');
console.log(arr);
  // eslint-disable-next-line max-lines-per-function
  let numberArr = arr.map((ele) => {
    switch (ele) {
      case 'one':
        return '1';
        break;
      case 'two':
        return '2';
        break;
      case 'three':
        return '3';
        break;
      case 'four':
        return '4';
        break;
      case 'five':
        return '5';
        break;
      case 'six':
        return '6';
        break;
      case 'seven':
        return '7';
        break;
      case 'eight':
        return '8';
        break;
      case 'nine':
        return '9';
        break;
      case 'zero':
        return '0';
        break;
      default:
        return ele;
    }
  });

  console.log(numberArr.join(' '));
}

wordToDigit('Please call me at five five five one two three four. Thanks.');
// "Please call me at 5 5 5 1 2 3 4. Thanks."