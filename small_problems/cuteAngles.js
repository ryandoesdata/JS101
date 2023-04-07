/* eslint-disable max-lines-per-function */
function dms (num) {
  let degrees = Math.floor(num);
  let decimal = num - (Math.floor(num));
  let minuteAndSecond = decimal * 60;
  let second = (minuteAndSecond - Math.floor(minuteAndSecond)) * 60;
  let microSecond = (second - Math.floor(second));
  let roundedMinute = Math.floor(minuteAndSecond);
  let roundedDownSecond = Math.floor(second);
  let roundedUpSecond = Math.ceil(second);

  if (roundedMinute < 10) {
    roundedMinute = `0${roundedMinute}`;
  }
  if (roundedDownSecond < 10) {
    roundedDownSecond = `0${roundedDownSecond}`;
  }
  if (roundedUpSecond < 10) {
    roundedUpSecond = `0${roundedUpSecond}`;
  }

  if (microSecond >= .5) {
    console.log(`${degrees}°${roundedMinute}'${roundedUpSecond}"`);
  } else if (microSecond <= .5) {
    console.log(`${degrees}°${roundedMinute}'${roundedDownSecond}"`);
  }
}

dms(30);           // 30°00'00"
dms(76.73);        // 76°43'48"
dms(254.6);        // 254°35'59"
dms(93.034773);    // 93°02'05"
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"