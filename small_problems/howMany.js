function countOccurrences(arr) {
  let occurences = {};

  for (let idx = 0; idx < elements.length; idx += 1) {
    occurences[elements[idx]] = occurences[elements[idx]] || 0;
    occurences[elements[idx]] += 1;
  }

  
let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output -- your output sequence may be different
car => 4
truck => 3
SUV => 1
motorcycle => 2