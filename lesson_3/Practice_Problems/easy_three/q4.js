let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
let arr2 = arr1.slice();
arr2[0].first = 42;
console.log(arr1);

/* 

shallow copies make new arrays with primative
values copied and stored in the new arrays. Objects
are not copied and remain in the computer's memory.
Only the pointers are copied, but they point to 
the same object. So in this case, changing objects in 
arr2 also changes the object for arr1.

*/

