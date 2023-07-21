function deepEqual(string) {
  let arr = string.split('');
  let halfway = Math.floor(arr.length / 2);
  let newArr = [];

  for (let substringLength = 1; substringLength <= halfway; substringLength += 1) {
    let start = 0;
    let end = substringLength;
    newArr = [];

    for (let idx = 0; idx < (arr.length / substringLength); idx += 1) {

      if (arr.length % substringLength === 0) {
          newArr.push(arr.slice(start, end));
      }
        
      start += substringLength;
      end += substringLength;
    }
    
    if (substringLength === halfway) {
      return [string, 1];
    }

    if (newArr.every(arr => arr.join('') === newArr[0].join(''))) {
       return [(newArr[0].join('')), (newArr.length)];
    }
  }
}

console.log(deepEqual("abcde"));