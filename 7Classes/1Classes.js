class person{
    constructor(name, idNo){
        // console.log("person created");
        this.name=name;
        this.idNo=idNo;
    }
    sayHi(){
        console.log("sayHi");
    }
    //static function
    static hello(){
        console.log("hello...");
    }
    //static property
    static sproperty ="Feeling something something hello honey bunny honey bunny toko toko";
}
const person1= new person("roshan",123);
console.log(person1);
person1?.sayHi();

// person1?.hello(); //it will thro an errror bcz it's static function
//static function will be get called by direct class name not from the object
person?.hello(); //it works
console.log(person1?.sproperty); //undefined ~ it will not work
console.log(person?.sproperty); //Feeling something something hello honey bunny honey bunny toko toko

