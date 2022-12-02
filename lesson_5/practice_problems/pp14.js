let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

let newArr = [];

for (let property in obj) {
  for (let nestedProp in property) {
    if (obj.property.nestedProp === 'fruit') {
      let colorArr = (obj.property.colors).split('');
      colorArr[0].toUpperCase();
      colorArr.join('');
      newArr.push(colorArr);
    } else {
      newArr.push((obj.property.size).toUpperCase());
    }
    return nestedProp;
  }
  return property;
}

console.log(newArr);