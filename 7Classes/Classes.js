class Student {
    constructor(name, phoneNo, regId) {
        this.name = name;
        this.phoneNo = phoneNo;
        this.regId = regId;
    }
    display() {
        return "name: " + this.name + " phoneNo: " + this.phoneNo + " regId: " + this.regId;
    }


}
const r1 = new Student("roshan", 7008280274, 12017337);
console.log(r1.display());
