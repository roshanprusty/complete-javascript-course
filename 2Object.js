// objective
// ... (spread)
// ?. (optional chaining)
// ?? (nullish coalescing)
// Advanced control flow
// Object.entries()
// Object.keys()
// Object.values()
// destructuring
// dynamic properties
// object shorthand
// property access

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//...(spread)
// let chocolate =["dairy milk","kitkat","5star"];
// let chocolate2 = [...chocolate];
// chocolate.push("milkbar");
// chocolate.unshift("galaxy");
// chocolate2.shift();
// chocolate2.pop();
// console.log(chocolate);
// console.log(chocolate2)

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//?.(optional chaining)
// let object={
//     a_category_emp:{
//         emp1:"roshan",
//         emp2:"sai"
//     },
//     b_category_emp:{
//         emp1:"suman",
//         emp2:"kiran"
//     },
//     c_category_emp:{
        
//     }
// };
// console.log(object.a_category_emp.emp1); //roshan

// // console.log(object.c_category_emp.emp1); //undefined
// // console.log(object.d_category_emp.emp1); //error

// //To deal with this problem optional chaining comes into play
// console.log(object?.a_category_emp.emp1);
// console.log(object?.c_category_emp.emp1);
// console.log(object?.d_category_emp.emp1);

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ?? (nullish coalescing)
// The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.

// const nullValue = null;
// const emptyText = ""; // falsy
// const someNumber = 42;

// const valA = nullValue ?? "default for A";
// const valB = emptyText ?? "default for B";
// const valC = someNumber ?? 0;

// console.log(valA); // "default for A"
// console.log(valB); // "" (as the empty string is not null or undefined)
// console.log(valC); // 42

//syntax error : It is not possible to combine both the AND (&&) and OR operators (||) directly with ??
// null || undefined ?? "foo"; // raises a SyntaxError
// true && undefined ?? "foo"; // raises a SyntaxError
//Instead, provide parenthesis to explicitly indicate precedence:
// (null || undefined) ?? "foo"; // returns "foo"

//Relationship with the optional chaining operator (?.)
// const foo = { someFooProp: "hi" };
// console.log(foo.someFooProp?.toUpperCase() ?? "not available"); // "HI"
// console.log(foo.someBarProp?.toUpperCase() ?? "not available"); // "not available"

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Advanced control flow

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Object.keys()
// Object.values()
// Object.entries()

// let value = {
//     fname:"roshan",
//     lname:"prusty",
//     // a:{
//     //     cllg:"lpu",
//     //     city:"rourkela"
//     // }
// }
// console.log(Object.keys(value)); //['fname', 'lname']
// console.log(Object.values(value)); //['roshan', 'prusty']
// console.log(Object.entries(value)); //[['fname', 'roshan'], ['lname', 'prusty']]

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// destructuring
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// dynamic properties
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// object shorthand
// let fname="roshan";
// let lname="prusty";
// let nm={
//     fname,
//     lname
// };
// console.log(nm);
// console.log(nm.typeof());
// property access
