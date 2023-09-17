import {singleTon} from "../decorator/singleTon.ts";

class IdxManager{
    protected index:number
    constructor(index:number = 2000) {
        this.index = index;
    }
    nextIndex(){
        return this.index++;
    }
}

 const IndexManager = singleTon(IdxManager);

export {
    IndexManager
}

