// will push new element into an array

/*

function addToRollingBuffer1(buffer, maxBufferSize, newElement) {
  buffer.push(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

console.log(addToRollingBuffer1([1, 2, 3, 4], 3, "idk"));

// will concat the new elements into a string

*/

let array = [1, 2, 3, 4, 5];

function addToRollingBuffer2(buffer, maxBufferSize, newElement) {
  buffer = buffer.concat(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

let newArray = addToRollingBuffer2(array, 3, "idk");

console.log(newArray);
console.log(array);