class IndexManager{
    index:number
    constructor(index:number) {
        this.index = index;
    }
    nextIndex(){
        return this.index++;
    }
}

export default new IndexManager(2000);