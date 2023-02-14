// https://www.youtube.com/watch?v=rHt8O9oGOrk&t=134s
// all const does is say once you've assigned something to this you're not allowed to make this variable point at something else so that's what const does immutability is you're not allowed to change the contents i can't add something in here i can't take something out i can't change the value of something in here or for an object same thing i cannot change any of these properties i'm not allowed to add a property i can't remove a property i can't change the value of a property that would be immutable
// const arr=[1,2,3];
// arr[0]=4;
// console.log(arr);

// const num=5;
// num=6;
// console.log(num); //Here error bcz i make const variable point to another value that's what we are not allowed

//const does not means immutable. const means cannot reassign
//premitives are immutable in JS. -- Object are mutable
// There are 7 primitive data types:
// string - number - bigint - boolean - undefined - symbol - null (These all are immutable)
//object, array, function and etc are mutable

//if you want your object for not to change you can use Object.freeze() method
// const arr2=[1,2,3];
// Object.freeze(arr2);
// arr2[0]=24;
// console.log(arr2); // [1, 2, 3]

//if you want your object to get updated only  - not to add any more
// there you can use seal method 
const arr2=[1,2,3];
Object.seal(arr2);
arr2[0]=9; //valid
arr2.push(5);
console.log(arr2); // [9, 2, 3] --> error (you can update only)
