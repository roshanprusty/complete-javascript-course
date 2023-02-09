// objectives
//1.spread operator
//2.at (index) value 
//3.every (callback) boolean
//4.filter (callback) array
//5.find (callback) name else undefined
//6.foreach (callback)
//7.includes (value) boolean
//8.join (Seprate symbol) 
//9.length
//10.map (callback) transform array
//11.push - unshift 
//12.pop - shift
//13.reduce - (callback) value
//*14.some - (callback) boolean
//15.splice - value addition in array & deletion
//16.? (optional chaining)
//17.Array of objects
//18.[](get item)
//*19.destructing 
//20.reverse() value

//*************************************


//*************************************
// strings are immutable but arrays are mutable

// to add items
// push ---> O(1) --> method adds new elements to the ending of an array. --> Using push you are allowed to add multiple elements at once.
// unshift ---> O(n) --> method adds new elements to the beginning of an array. --> Using shift --> you are allowed to add multiple elements at once.

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.unshift("Lemon", "Pineapple");
// console.log(fruits);

// to remove items
// pop -- > remove item from the last and return that item
// shift ---> remove item from the beginning and return that item
// const removedItem = fruits.shift();
// console.log(removedItem);
// console.log(fruits);

// arrays are refernce types
// let artists = ["Arijit Singh", "eddie", "andrew"];
// let artists2 = artists;
// artists.push("maneli jamal");
// console.log(artists);
// console.log(artists2);

// heap memory --- store reference types

// stack memory --- store primitives types

// let fruits = ["apple", "mango"];
// let fruits2 = fruits;
// fruits.push("pineapple")
// console.log(fruits); //['apple', 'mango', 'pineapple']
// console.log(fruits2); //['apple', 'mango', 'pineapple']
//here you will find fruits2 also showing pineapple. It's because fruits2 is pointing to the same value as fruit does.

// stack
// -----------------------------------------
// fruits : x1234
//fruits: x1234
// -----------------------------------------

// heap memory
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// x1234 : ["apple", "mango"];

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//to avoid this --> 
// let fruits = ["apple", "mango"];
// let fruits2 = [...fruits]; //spread operator.
// fruits.push("guava");
// let fruits3 = [...fruits2,"pineapple","banana"]; //spread operator.
// console.log(fruits); //['apple', 'mango']
// console.log(fruits2); //['apple', 'mango', 'guava']
// console.log(fruits3); //['apple', 'mango', 'guava','pineapple','banana']

//IMPORTANT NOTE: This is possible only in reference data type not for primitive data types.



//in const we can do push and pop type operations but we can reassign.
// const myArray = [1, 2, 3];
// myArray.push(2);
// myArray = []; //ERROR
// console.log(myArray); //[1, 2, 3, 2]

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// .at(index)
// You can also use the .at(index) method, which accepts negative indices making it easier to find the last element of the array.
// const users = ["Sam", "Alex", "Charley"];
// users.at(1); //"Alex"
// users.at(-2); //"Alex"

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// .every()
//you can use the .every() method, which accepts the callback function
//The every() method tests whether all elements in the array pass the test
// let nums=[1,2,3];
// console.log(nums.every(function(num){
//     return num>0;
// }));

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//Array filter
// A common array method is the .filter() method. When you call this method on an array, you will get back another array that contains some of the items from the original array, based on the condition you specify. Let's take an example:
// let numbers =[1,2,3,4,5,6];
// let greaterthan3 = numbers.filter(function(number){
//     return number >3;
// });
// console.log(greaterthan3); //[4,5,6]

// Don't forget the return keyword inside the callback function.

//working: Now every array method has a different behavior which we'll be explaining. This behavior often depends on the result of the callback. In this example, if the callback function returns true, then the item will be included in the final array returned by .filter(). However, if the callback function returns false, then the item will not be included in the final array.

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//Array find
// let names=["roshan","sai","rohit","kishor","anita"];
// let result=names.find(function(name){
//     return name==="om";
// });
// console.log(result);

// The .find() method returns the first item which matches the condition that you specify. If no items were found, you will get back undefined.
// The .filter() method always returns an array. Even if it's empty.

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//forEach
// .forEach(callback) iterates over every item in an array.
// const grades = [10, 8, 13];
// grades.forEach(function(grade) {
//     // do something with individual grade
//     console.log(grade);
// });

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Array includes(item)
// The array .includes(item) method is one of the simplest array methods as it takes an item rather than a callback and returns true when that item exists in the array and false otherwise. Here's an example:
// const groceries = ["Apple", "Peach", "Tomato"];
// groceries.includes("Tomato"); // true

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Array.join()
// The array .join(glue) method returns a string of the array elements separated by the glue.
// const groceries = ["Apple", "Peach", "Tomato"];
// groceries.join("; "); // "Apple; Peach; Tomato"
// groceries.join(" . "); // "Apple . Peach . Tomato"

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Array map
// The .map(callback) method allows you to transform an array into another one. Here are some common examples:

// [4, 2, 5, 8] transformed to [8, 4, 10, 16]. We doubled every item in the original array.
// ["sam", "Alex"] transformed to ["SAM", "ALEX"]. We upper cased every item in the original array.
// Notice that you always get back an array containing the same number of items compared to the original array, but every item has most likely undergone some transformation.

// In the first example, the transformation is that we multiply every number by 2.
// In the second example, the transformation is that we call .toUpperCase() on every item.

// Let's take a look at how we can implement these transformations:

// const numbers = [4, 2, 5, 8];

// const doubled = numbers.map(function(number) {
//     return number * 2;
// });
// console.log(doubled); // [8, 4, 10, 16]

// const names = ["sam", "Alex"];
// const upperNames = names.map(function(name) {
//     return name.toUpperCase();
// });

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Array reduce : https://www.youtube.com/watch?v=g1C40tDP0Bk
// const numbers=[1,2,3];
// let sum =0;,
// for(let n of numbers){
//     sum+=n;
// } 
// console.log(sum);

//you can bypass this by using the reduce function instead of 

// const sum = numbers.reduce((accumulator, currentValue)=>{
//     return accumulator+currentValue;
// },0); //0 is the initial value for the accumulator
// console.log(sum);

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// some 
// The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.
// const array = [1, 2, 3, 4, 5];
// const check = array.some(function(num){
//     return num%2==0;
// });
// console.log(check);

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// splice : https://www.youtube.com/watch?v=FFas8cMHVwg
// splice(start)
// splice(start, deleteCount)
// splice(start, deleteCount, item1)
// splice(start, deleteCount, item1, item2, itemN)
// let numbers=[1,2,3,4,5];
// numbers.splice(1,3);
// let new_num=numbers.splice(1,1,15,9);
// console.log(numbers); //[1, 2, 7, 91, 15, 9, 4, 5]
// console.log(new_num); //[3]

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ? (optional chaining)
// let obj={
//     person:{
//         name:"roshan",
//         // age:20
//     },
    // qualification:{
    //     bdeg:"lpu",
    // }
// }
// let accessName= obj.person.name;
// console.log(accessName); //roshan
// let accessAge= obj.person.age;
// console.log(accessAge); //undefined

// let accessQuali = obj.qualification.bdeg;
// console.log(accessQuali); 
//2Array.js:231 Uncaught TypeError: Cannot read properties of undefined (reading 'bdeg')

//problem lie here suppose take if qualification is not there it will throw an error code will not run -- to deal with this optional chaining came into play.

// console.log(obj?.person?.name); //roshan
// console.log(obj?.person?.age); //undefined
// console.log(obj?.qualification?.bdeg); //undefined

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Array of objects: https://www.freecodecamp.org/news/javascript-array-of-objects-tutorial-how-to-create-update-and-loop-through-objects-using-js-array-methods/

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// destructing : The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.
// let a, b, rest;
// [a, b] = [10, 20];
// console.log(a); // Expected output: 10
// console.log(b); // Expected output: 20
// [a, b, ...rest] = [10, 20, 30, 40, 50];
// console.log(rest); // Expected output: Array [30, 40, 50]
// const x = [1, 2, 3, 4, 5];
// const [y, z] = x;
// console.log(y); // 1
// console.log(z); // 2

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// reverse()
// let arr =[1,2,3];
// console.log(arr);
// console.log(arr.reverse());



