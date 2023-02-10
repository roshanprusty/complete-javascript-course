// .at()
// .endsWith()
// .includes()
// .length
// .replace()
// .replaceAll()
// .split()
// .startsWith()
// .substring()
// .toLowerCase()
// .toUpperCase()
// .trim()
// Concatenation
// Template strings
// [] (character access)

// .at()
// let name="roshan prusty";
// console.log(name.at(-1));
// console.log(name.at(-1)); //or else you can do in this way

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// .endsWith()
// let str = "Hello, World!";
// let searchValue = 'World!';
// let result = str.endsWith(searchValue);
// console.log(result); // Output: true

// .includes()
// let text = "Hello world, welcome to the universe.";
// let result = text.includes("world");
// let result = text.includes("world", 12);
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// .length
// let name= "roshan prusty";
// console.log(name.length);

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// .replace()
// let str = "Hello, World world";
// let searchValue = "World";
// let replaceValue = "JavaScript";
// let result = str.replace(searchValue, replaceValue);
// console.log(result); // Output: "Hello, JavaScript! world"

//but if you want to replace all word(replace value) then you have to use .replaceAll method.

// .replaceAll()
// let str = "Hello, World world";
// let searchValue = "Hello";
// let replaceValue = "Hi";
// let result = str.replace(new RegExp(searchValue, "g"), replaceValue);
// console.log(result); // Output: "Hi, World! Hi, World!"

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// .split()
// let text = "How are you doing today?";
// const myArray = text.split(" "); 
// console.log(myArray);
// console.log(myArray.at(0)) // Output: "How are you doing today?" 
// const myArray2 = text.split(" ", 3);
// console.log(myArray2);

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// .startsWith()
// const str = "To be, or not to be, that is the question.";
// startsWith(searchString)
// startsWith(searchString, position)
// console.log(str.startsWith("To be")); // true
// console.log(str.startsWith("not to be")); // false
// console.log(str.startsWith("not to be", 10)); // true

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// .substring()
// substring(indexStart)
// substring(indexStart, indexEnd)
// const name="roshan prusty";
// console.log(name.substring(0));
// console.log(name.substring(0,6));

// difference between substring() and substr()
// The substr() method returns the part of a string between the start index and a number of characters after it. substr() extracts length characters from a string, counting from the start index. If start is a positive number, the index starts counting at the start of the string. If start is a negative number, the index starts counting from the end of the string.
// console.log(name.substr(0,3)); //0 index - take 3 character from 0th index

//Differences between substring() and slice()
// The substring and slice methods in JavaScript are similar in that they both extract a portion of a string or an array and return it as a new string or array, respectively. However, there are some differences between the two methods:

//1. Order of arguments: The substring method does not care about the order of the arguments. If the starting position is greater than the ending position, the substring method will swap the two arguments. The slice method, on the other hand, does not modify the order of the arguments.
// const name="roshan prusty";
// console.log(name.substring(name.length,0)); //it swap the index
// console.log(name.slice(name.length,0)); //it does not

//2. Negative values: The substring method treats negative values as 0. If either argument is negative, the substring method will treat it as 0. The slice method treats negative values as indices counting from the end of the string or array
// const name="roshan prusty";
// console.log(name.substring(1,-1)); //here negative value treated as 0 --> then as per the substring functionality it swapped the value
// console.log(name.slice(1,-1));

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// .toLowerCase()
// .toUpperCase()
// const fname="ROSHAN";
// console.log(fname.toLowerCase());
// const lname="prusty";
// console.log(lname.toUpperCase());

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// .trim()
// The trim() method removes whitespace from both ends of a string and returns a new string, without modifying the original string.
// const name="         roshan prusty            ";
// console.log(name.trim());
// console.log(name.length);

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Concatenation

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Template strings

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// [] (character access)

