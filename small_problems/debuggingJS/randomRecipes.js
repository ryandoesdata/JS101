// Picks n random elements from an array,
// and returns a new array with those elements.
function random(array, n) {
  if (n === undefined) {
    n = 1;
  }

  let elements = array.slice(); // creates a shallow copy of the input array
  let randomElements = []; // empty array

  while ((n > 0) && (elements.length > 0)) { //while n is greater than zero and the length of elements is greater than zero
    let randomIndex = Math.floor(Math.random() * elements.length); // randomIndex is a random index of elements
    let randomElement = elements[randomIndex]; // random element is a random element of elements

    randomElements.push(randomElement); // pushes the current element into the empty array
    elements.splice(randomIndex, 1); // removes that element from the elements array
    n--; // n is reduced by 1
  }

  return randomElements; // returns the array with new elements pushed in
}

// Ingredients

let ingredients = ['rice', 'green bell pepper', 'mushrooms', 'carrot', 'kebab',
  'spinach', 'soy bean sprouts', 'mashed potatoes', 'corn', 'cucumber', 'peas'];

let spices = ['peri peri', 'cinnamon', 'nutmeg', 'cardamom', 'ground ginger',
  'poppy seed', 'cumin'];

let extras = ['peanuts', 'sesame seeds', 'egg', 'wasabi', 'soy sauce'];

// Name

let adjective  = ['Delicious', 'Hot', 'Exotic', 'Creative', 'Festive', 'Dark'];
let firstNoun  = ['Power', 'After Work', 'Holiday', 'Disco', 'Late Night'];
let secondNoun = ['Mix', 'Delight', 'Bowl', 'Chunk', 'Surprise', 'Bliss'];

// Generate!

let dishName = random(adjective).concat(random(firstNoun), random(secondNoun));

let dish = random(ingredients, 3).concat(random(spices, 2), random(extras, 1));


console.log(`How about: ${dishName.join(' ')}`);
console.log(`You need: ${dish.join(', ')}`);