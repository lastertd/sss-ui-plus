import singleTon from "../singleTon";
class IndexManager{
    protected index:number
    constructor(index:number = 2000) {
        this.index = index;
    }
    nextIndex(){
        return this.index++;
    }
}

export default singleTon(IndexManager);