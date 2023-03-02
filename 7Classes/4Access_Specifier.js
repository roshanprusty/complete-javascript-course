// Public: Any property or method that is accessible from anywhere in the code is considered public. In JavaScript, all properties and methods are public by default unless they are specifically marked as private or protected.
class emp{
    constructor(n){
        this.name=n;
    }
    getName(){
        console.log(this.name);
    }
}

// Private: Private properties and methods can only be accessed within the same class or object. There are a few ways to achieve private properties in JavaScript, such as using closures, symbols, or WeakMaps.
class emp2{
    #name="";
    constructor(n){
        this.#name=n;
    }
    getName(){
        console.log(this.#name);
    }
    #msg(){
        console.log("Hello....");
    }
    pubfun(){
        this.#msg();
    }
}

// Protected: In JavaScript, there is no direct way to achieve protected properties and methods. However, you can simulate protected properties by using naming conventions. By convention, properties and methods that are intended to be protected are prefixed with an underscore (_) to indicate that they should not be accessed from outside the class or object.


const E1 = new emp("roshan");
E1?.getName(); //roshan
console.log(E1?.name); //roshan 

const E2 = new emp2("Rohit");
E2?.getName(); //rohit
console.log(E2?.name); //undefinde bcz of private.
// E2?.#msg(); //error
E2?.pubfun(); //hello....