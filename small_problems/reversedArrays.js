function reverse (list) {
  let j = list.length - 1;
  let placeholder;

  for (let i = 0; i < (list.length - 1) / 2; i += 1) {
    placeholder = list[i];
    list[i] = list[j];
    list[j] = placeholder;
    j--;
  }
  return list;
}



console.log(reverse([1, 3]));

let list = [1, 2, 3, 4];
let result = reverse(list);
console.log(result); // logs [4,3,2,1]
console.log(list === result); // logs true

let list1 = ["a", "b", "c", "d", "e"];
let result1 = reverse(list1);
console.log(result1); // logs  ["e", "d", "c", "b", "a"]
console.log(list1 === result1); // logs true

let list2 = ["abc"];
let result2 = reverse(list2);
console.log(result2); // logs  ["abc"]
console.log(list2 === result2); // logs true

let list3 = [];
let result3 = reverse(list3);
console.log(result3); // logs []
console.log(list3 === result3); // logs true

function isBalanced(string) {
  let allPara = string.split('').filter(char => (char === "(") || (char === ")"));
  let rightPara = allPara.filter(char => char === "(");
  let leftPara = allPara.filter(char => char === ")");

  if ((rightPara.length === leftPara.length) && (allPara[0] !== ")") && (allPara[allPara.length - 1] !== "(")) {
    return true;
  }
  return false;
}