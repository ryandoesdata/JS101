function isIncluded(arr, val) {
  if (arr.some(num => num > val)) {
    return true;
  }
  return false;
}

console.log(isIncluded([1, 2, 3], 2));

/*
  for (let idx = 0; idx < arr.length; idx += 1) {
    if (arr[idx] > val) {
      return true;
    }
  }

  return false;
}
*/