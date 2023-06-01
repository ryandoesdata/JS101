function letterCaseCount (string) {
  let obj = {};
  let upperCaseString = string.replace(/[^A-Z]/g, "");
  console.log(upperCaseString);
  let lowerCaseString = string.replace(/[^a-z]/g, "");
  let specialString = string.replace(/[a-zA-Z]/g, "");

  obj.lowercase = lowerCaseString.length;
  obj.uppercase = upperCaseString.length;
  obj.neither = specialString.length;

  console.log(obj);
}

letterCaseCount('abCdef 123');  // { lowercase: 5, uppercase: 1, neither: 4 }
letterCaseCount('AbCd +Ef');    // { lowercase: 3, uppercase: 3, neither: 2 }
letterCaseCount('123');         // { lowercase: 0, uppercase: 0, neither: 3 }
letterCaseCount('');            // { lowercase: 0, uppercase: 0, neither: 0 }
