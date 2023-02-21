class matriculate{
    constructor(scl_name){
        this.scl_name=scl_name;
    }
}
class Intermediate extends matriculate{
    constructor(scl_name, cllg_name){
        super(scl_name);
        this.cllg_name=cllg_name;
    }
}
class graduation extends Intermediate{
    constructor(scl_name, cllg_name, uni_name){
        super(scl_name,cllg_name);
        this.uni_name=uni_name;
    }
    show(){
        console.log(this.scl_name+" "+this.cllg_name+" "+this.uni_name);
    }
}
const roshan = new graduation("cvem","dps","lpu");
roshan.show();