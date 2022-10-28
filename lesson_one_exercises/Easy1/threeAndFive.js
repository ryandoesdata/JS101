function multisum(number) {
  let total = 0;

  for (let i = 1; i <= number; i += 1) {
    if (i % 3 === 0 || i % 5 === 0) {
      total += i;
    }
  }
  return total;
}; 

console.log(multisum(6));  

 // if (i % 3 === 0 || i % 5 === 0) {
     // return i += 
