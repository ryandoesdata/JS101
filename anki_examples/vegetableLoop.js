const vegetables = ['carrots', 'beans', 'couliflour', 'broccoli', 'squash', 'onions', 'kale', 'potatoes', 'garlic', 'cucumber'];

let currentVeg = 0;
while (currentVeg !== 'cucumber') {
  currentVeg = vegetables [Math.floor(Math.random() * 10)];
  console.log(currentVeg);
}