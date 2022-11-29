let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

for (const name in munsters) {
  console.log(`${name} is a ${munsters[name].age}-year-old ${munsters[name].gender}.`);
}