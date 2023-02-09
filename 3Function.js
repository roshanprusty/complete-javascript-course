// => (arrow functions)
// ?. (optional chaining)
// Asynchronous callbacks
// Callback pattern
// Closures
// Hoisting
// Lexical scope
// Passing functions
// basic functions
// default parameters
// implicit return

//confusion when to use curly bracket & when to use square bracket?
// In JavaScript, curly brackets {} are used to define objects and block statements, while square brackets [] are used to define arrays and access elements within an array or object.
// For example, you would use curly brackets to define an object like this:
// const person = {
//   name: "John",
//   age: 30
// };
// And you would use square brackets to define an array like this:
// const numbers = [1, 2, 3, 4, 5];
// Or to access an element of an array or object, like this:
// console.log(numbers[2]); // Output: 3
// console.log(person["name"]); // Output: "John"

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// => (arrow functions)
// An arrow function in JavaScript is a shorthand way to define a function. It uses the "fat arrow" (=>) syntax, and is often used as an alternative to the traditional function keyword. 

// function sum(a,b){
//     return a+b;
// }
// let sumA = (a,b) =>{
//     a=a*2;
//     return a+b;
// }

//if in the function we have single line 
// let sumB = (a,b) => a+b;

//if you have one parameter 
//---> OLD WAY
// function doubleC(a,b){
//     return a+b;
// }
// const doubleC = a => 2*a;

// console.log(sum(2,3));
// console.log(sumA(2,3));
// console.log(sumB(2,3));
// console.log(doubleC(2));

// document.addEventListener("click",()=>{
//     console.log("clicked");
// });

// let arr =[1,2,3];
// let newArr = arr.map(function(value){
//     value*2;
// })
// let newArr = arr.map((value) =>{
//     return value*2;
// });
// let newArr = arr.map((value) => value*2);
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Asynchronous callbacks
//first lets understand what is difference between synchronous vs asynchronous callbacks~

// Synchronous callbacks are called immediately after the function that they are associated with has completed execution. In contrast, asynchronous callbacks are called at a later time, after the function that they are associated with has returned. In JavaScript, synchronous callbacks are typically used with synchronous code, while asynchronous callbacks are used with asynchronous code, such as code that makes network requests or accesses the file system.

// here's an example of a synchronous callback in JavaScript:
// function doWork(callback) {
//     // Perform some synchronous work
//     const result = "Work done";
  
//     // Call the callback with the result
//     callback(result);
//   }
  
//   function handleResult(result) {
//     console.log(result); // "Work done"
//   }
//   doWork(handleResult);

// In this example, the doWork function performs some synchronous work and then calls the callback function that was passed to it, passing it the result of the work. The handleResult function is the callback, and it is called immediately after the doWork function has completed its work.
  
// function doWork(callback) {
//     // Perform some asynchronous work
//     setTimeout(() => {
//       const result = "Work done";
//       callback(result);
//     }, 1000);
//   }
  
//   function handleResult(result) {
//     console.log(result); // "Work done"
//   }
  
//   doWork(handleResult);
//   console.log("I am not blocked");
  
// In this example, the doWork function uses the setTimeout function to perform some asynchronous work. The setTimeout function takes two arguments: a callback function to be executed after a certain amount of time, and the time in milliseconds to wait before executing the callback. The handleResult function is passed as the callback function.

// In this example, the handleResult function is called after 1 sec later and it will print "Work done" in the console. The console.log("I am not blocked") will execute immediately and it will print "I am not blocked" in the console.