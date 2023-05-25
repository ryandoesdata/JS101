function swapName(string) {
  return string.split(' ').reverse().join(', ');
}

swapName('Joe Roberts');    // "Roberts, Joe"

function swapName (string) {
  let arr = string.split(' ');
  return `${arr.pop()}, ${arr.join(' ')}`;
}


console.log(swapName('Karl Oskar Henriksson Ragvals'));    // "Roberts, Joe"