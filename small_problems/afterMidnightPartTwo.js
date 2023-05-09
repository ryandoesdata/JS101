function afterMidnight(string) {
  let hour = Number(string.slice(0, 2));
  let minute = Number(string.slice(3));
  let totalMinutesAfterMidnight = (hour * 60) + minute;

  return totalMinutesAfterMidnight === 1440 ? 0 : totalMinutesAfterMidnight;
}

function beforeMidnight(string) {
  let hour = Number(string.slice(0, 2));
  let minute = Number(string.slice(3));
  let totalMinutesBeforeMidnight = 1440 - ((hour * 60) + minute);

  return totalMinutesBeforeMidnight === 1440 ? 0 : totalMinutesBeforeMidnight;
}

console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);
