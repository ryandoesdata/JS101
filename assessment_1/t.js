let arr = ['first', 'second'];

function mutateArr(parameter) {
  parameter.push('third');
}

mutateArr(arr);

console.log(arr);