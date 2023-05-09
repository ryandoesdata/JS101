let myPets = {
  dogs: [
    { name: "phanouris", breed: "english setter" },
    { name: "luna", breed: "mongrel" },
  ],
  birds: [
    { name: "lot", breed: "yellow-faced parrot" }
  ],
  fish: [
    { name: "goldin", breed: "goldfish" }
  ],
  cats: [
    { name: "louie", breed: "british shorthair" },
    { name: "zuzu", breed: "moggie" }
  ]
};

let petsArr = [];
let clonedPets = JSON.parse(JSON.stringify(myPets));

for (let type in clonedPets) {

  let petType = { type, pets: [] };

  for (let i = 0; i < clonedPets[type].length; i += 1) {

    petType.pets.push(clonedPets[type][i]);

  }
  petsArr.push(petType);
}

//console.log(petsArr[0].pets[1] === myPets.dogs[1]); // false

let yippy = petsArr
  .map((obj) => obj.pets)
  .flat();
  //.find((pet) => pet.name === "yippy" && pet.breed === "canary");

console.log(yippy);