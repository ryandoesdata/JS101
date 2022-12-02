let arr = ['hi', 'i', 'like', 'eggs'];

for (let i = 0; i < arr.length; i += 1) {
  console.log(arr[i]);
}

arr.forEach(strings => console.log(strings));

let index = 0;

while (index < arr.length) {
  console.log(arr[index]);
  index += 1;
}