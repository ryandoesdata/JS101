let bobsTeams = ['patriots', 'red sox', 'bruins', 'celtics'];
let tinasTeams = ['yankees', 'giants', 'bruins', 'celtics'];
let mutualTeams = [];
// eslint-disable-next-line id-length
for (let i = 0; i < bobsTeams.length; i++) {
// eslint-disable-next-line id-length
  for (let j = 0; j < tinasTeams.length; j++) {
    if (bobsTeams[i] === tinasTeams[j]) {
      mutualTeams.push(tinasTeams[j]);
    }
  }
}

console.log(mutualTeams);