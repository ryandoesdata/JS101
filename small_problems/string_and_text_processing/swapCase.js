let swapCase = string =>
  
  string.split('').map((ele) => {
    if (ele.toUpperCase() === ele) {
      return ele.toLowerCase();
    } else {
      return ele.toUpperCase();
    }
  }).join('')

swapCase('CamelCase');              // "cAMELcASE"
swapCase('Tonight on XYZ-TV');      // "tONIGHT ON xyz-tv"