let sentence = "this is a sentence";

function allCaps() {
  sentence.toUpperCase();
}

allCaps();
console.log(sentence);


let number = [1, 2, 3];
number[0] = 0;

// number[0] references the first element of the array and reassigns.
// each primitive value has its own location

[[1, 2], [3, 4]].forEach(arr => console.log(arr[0]));

// arr is parameter, console.log is called within the callback function body.