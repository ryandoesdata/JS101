/*

let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);

let newFlintstones = flintstones.concat(flintstones[2], flintstones[3]);

newFlintstones.splice(2, 2);

console.log(newFlintstones);

*/

let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);

flintstones = [].concat(...flintstones);

console.log(flintstones);