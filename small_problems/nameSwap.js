function swapName(string) {
  return string.split(' ').reverse().join(', ');
}

swapName('Joe Roberts');    // "Roberts, Joe"

function swapNameWithMiddle(string) {
  let withoutLast = string.split(' ');
  let lastName = string.split(' ').pop();

  return `${lastName}, ${withoutLast.join(' ')}`;
}

console.log(swapNameWithMiddle('Karl Oskar Henriksson Ragvals'));    // "Ragvals, Karl Oskar Henriksson"