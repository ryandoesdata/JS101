let flintstones = "The Flintstones Rock!";
let iteration = 0;

function flintstonesRock(string) {
  for (iteration; iteration < 10; iteration += 1) {
    return string.padStart(iteration);
  }
  console.log(flintstonesRock);
}

console.log(flintstonesRock(flintstones));