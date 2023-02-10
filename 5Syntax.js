// Exceptions
// Semi-colons
// for (loops)
// for...in
// for...of
// if
// try...catch
// try...catch...finally

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// for (loops)
// for (initialization; condition; afterthought)
//   statement

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// for...in
// for (var property in object) {
//     // code to be executed
//   }
// let person = {
//     name: 'John Doe',
//     age: 30,
//     job: 'developer'
//   };
  
//   for (var property in person) {
//     console.log(property + ': ' + person[property]);
//   }


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// for...of
// for (var element of iterable) {
//     // code to be executed
//   }

// let numbers = [1, 2, 3, 4, 5];

// for (var number of numbers) {
//   console.log(number);
// }

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//the difference between for...of and for...in
// for...of: The for...of loop is used to iterate over iterable objects, such as arrays, strings, maps, and sets. The loop will iterate over the values of the iterable object and you can access each value using the loop variable.
// for...in: The for...in loop is used to iterate over the properties of an object. The loop will iterate over the properties of the object and you can access each property using the loop variable.

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// if
// function testNum(a) {
//     let result;
//     if (a > 0) {
//       result = 'positive';
//     } else {
//       result = 'NOT positive';
//     }
//     return result;
//   }
  
//   console.log(testNum(-5));

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// The try...catch statement in JavaScript is used to handle errors that might occur in your code. The basic syntax of a try...catch block looks like this:

// try {
//   // Your code goes here
// } catch (error) {
//   // Error handling code goes here
// }

// Here's how it works:

// 1. The code in the try block is executed.
// 2. If no errors occur, the code in the catch block is ignored, and the program continues to run normally.
// 3. If an error occurs in the try block, execution is immediately stopped and transferred to the catch block. The error object contains information about the error that occurred.

// try {
//     console.log(a); // ReferenceError: a is not defined
//   } catch (error) {
//     console.error(error);
//   }
  
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// try...catch...finally
// try {
//     // code to be executed
//  } catch (error) {
//     // code to handle the exception
//  } finally {
//     // code that is always executed, regardless of whether an exception was thrown or caught
//  }

// The try block contains the code that may throw an exception. If an exception is thrown, the program immediately transfers control to the catch block, where the exception can be handled. The finally block, if present, contains code that is executed regardless of whether an exception was thrown or caught.

// try {
//     var x = y;
//  } catch (error) {
//     console.log("An error occurred: " + error);
//  } finally {
//     console.log("The try...catch...finally statement is complete.");
//  }
//o/P
// An error occurred: ReferenceError: y is not defined
// The try...catch...finally statement is complete.
 