function halvsies(arr) {
  let firstHalf = arr.slice(0, (arr.length / 2));
  if (arr.length % 2 !== 0) {
    firstHalf = arr.slice(0, (Math.ceil(arr.length / 2)));
  }
  let secondHalf = arr.slice(arr.length / 2);
  if (arr.length % 2 !== 0) {
    secondHalf = arr.slice(Math.ceil(arr.length / 2));
  }
  let newArr = [firstHalf, secondHalf];
  console.log(newArr);
}

halvsies([]);