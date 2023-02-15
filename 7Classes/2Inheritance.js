class emp{
    // constructor(){
    //     console.log("emp constructor called");
    // }

    //it will not work
    //JavaScript does not support method overloading like some other programming languages but there are various techniques you can use to achieve similar functionality.
    // constructor(name){
    //     this.name=name;
    // }

    // Using these techniques, you can create constructors that have different sets of parameters or default values, and that behave differently depending on the number of arguments passed to them. However, it's important to note that these techniques are not true constructor overloading, as JavaScript does not support
    constructor(name,pno='default'){
        this.name=name;
        this.pno=pno;
    }
}
class manager extends emp{
    // constructor(){
    //     console.log("manager constructor called");
    // }
}
// let mng1= new manager("roshan");
// console.log(mng1?.name);

const mng1=new manager("roshan");
const mng2=new manager("roshan","123");
console.log(mng1);
console.log(mng2);