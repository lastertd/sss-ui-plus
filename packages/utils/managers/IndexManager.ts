import {singleTon} from "../decorator/singleTon";

/**
 * @description 元素层级管理器, 不断递增z-index
 */
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

