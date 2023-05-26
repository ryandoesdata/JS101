/*
function average(arr) {
  const initialValue = 0;

  const sumWithInitial = arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  );
  return Math.floor(sumWithInitial / arr.length);
}

function average(numbers) {
  let sum = 0;

  numbers.forEach(num => sum += num);

  console.log(Math.floor(sum / numbers.length));
}

average([1, 5, 87, 45, 8, 8]);       // 25
average([9, 47, 23, 95, 16, 52]);    // 40