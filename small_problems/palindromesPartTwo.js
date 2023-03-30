function isPalindrome(string) {

  return string === string.split('').reverse().join('');

}

function isRealPalindrome(string) {

  string = string.toLowerCase().replace(/[^a-z0-9]/g, '');
  console.log(isPalindrome(string));

}

isRealPalindrome('madam');               // true
isRealPalindrome('Madam');               // true (case does not matter)
isRealPalindrome("Madam, I'm Adam");     // true (only alphanumerics matter)
isRealPalindrome('356653');              // true
isRealPalindrome('356a653');             // true
isRealPalindrome('123ab321');            // false