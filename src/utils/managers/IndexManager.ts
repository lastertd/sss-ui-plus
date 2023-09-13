import {singleTon} from "../decorator/singleTon.ts";

class IndexManager{
    protected index:number
    constructor(index:number = 2000) {
        this.index = index;
    }
    nextIndex(){
        return this.index++;
    }
}

const _ = singleTon(IndexManager);

export {
    _ as IndexManager
}