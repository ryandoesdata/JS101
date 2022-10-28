function isLeapYear(year) {
  if (year % 4  === 0 && year % 100 !== 0 && year >= 1752) {
    return true;
} else if (year % 4 === 0 && year < 1752) {
    return true;
} else {
    return year % 400 === 0; 
}
};

console.log(isLeapYear(1752));
