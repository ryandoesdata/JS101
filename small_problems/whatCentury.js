function century(year) {
  let whatCentury;
  let centuryNumber = Math.ceil(year / 100);
  let centuryString = centuryNumber.toString();
  let lastDigit = centuryString[centuryString.length - 1];
  let lastTwoString = centuryString.slice(centuryString.length - 2);
  let lastTwoNumber = Number(lastTwoString);
  if ((lastTwoNumber > 10) && (lastTwoNumber < 14)) {
    whatCentury = centuryString + "th";
  } else if (lastDigit === "1") {
    whatCentury = centuryString + "st";
  } else if (lastDigit === "2") {
    whatCentury = centuryString + "nd";
  } else if (lastDigit === "3") {
    whatCentury = centuryString + "rd";
  } else {
    whatCentury = centuryString + "th";
  }
  console.log(whatCentury);
}

century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"
century(11101);
century(11001);