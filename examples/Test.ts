import singleTon from "../src/utils/singleTon";
class Test{
     a;
    constructor(a:number) {
        this.a = a;
    }
}


export default  singleTon(Test);