function sum(num) {
  let total = 0;
  String(num).split('').forEach((num) => {
    total += Number(num);
  });
  return total;
}

sum(45);
sum(23);           // 5
sum(496);          // 19
sum(123456789);    // 45