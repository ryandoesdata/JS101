/* understand the problem
input:  a number
output: a number

rules: the output is the amount of friday the 13ths in the year of the input number

Examples are provided

data structures:


*/

function fridayThe13ths(year) {
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let unluckyDays = 0;
  months.forEach((month) => {
    let day = new Date(`${month} 13, ${year}`);
    if (day.getDay() === 5) {
      unluckyDays += 1;
    }
  });
  return unluckyDays;
}

function fridayThe13ths(year) {
  let month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  let count = 0;
  for (let i = 0; i < month.length; i += 1) {
    let day = new Date(`${month[i]}, 13, ${year}`);
    if (day.getDay() === 5) {
      count += 1;
    }
  }
  
  console.log(count);
}

fridayThe13ths(2023);      // 1
fridayThe13ths(2027);      // 3
fridayThe13ths(2028);      // 2

