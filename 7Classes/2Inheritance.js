"use strict";
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
    // constructor(name,pno='default'){
    //     this.name=name;
    //     this.pno=pno;
    // }

    constructor(name){
        this.emp_name=name;
    }
    show(){
        console.log("The name of the employee is " + this.emp_name); 
    }
    msg(){
        console.log("Hello....")
    }

}
class manager extends emp{
    constructor(mng_name,emp_name){
        super(emp_name);
        this.mng_name=mng_name;
    }
    msg(){
        console.log("HIEE....")
    }
    info(){
        //to call emp-->msg function
        super.msg();
        //to call manager-->msg function
        this.msg();
        console.log("Employee: "+this.emp_name+" Manager: "+this.mng_name);
    }
}
// let mng1= new manager("roshan");
// console.log(mng1?.name);


// const mng1=new manager("roshan");
// const mng2=new manager("roshan","123");
// console.log(mng1);
// console.log(mng2);

const mng1 = new manager("Roshan","rohit");
// const mng1 = new manager("Roshan");
// console.log(mng1?.name)
// console.log(mng1?.name)
// console.log(mng1.info());
mng1.info();