let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];
let flintObj = {};
let index = 0;

while (index < flintstones.length) {

  flintObj[flintstones[index]] = index;

  index += 1;

}

console.log(flintObj);