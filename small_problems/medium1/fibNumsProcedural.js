function fibonacci (digit) {
  let previousNum = 0;
  let currentNum = 1;

  for (let i = 1; i < digit; i += 1) {
    currentNum += previousNum;
    previousNum = currentNum - previousNum;
  }
  console.log(currentNum);
}
fibonacci(20);       // 6765
fibonacci(50);       // 12586269025
fibonacci(75);       // 2111485077978050