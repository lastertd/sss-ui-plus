export type position = 'down' | 'up';


class LayoutManager{
    protected position:position
    protected appList: Array< HTMLElement >

    constructor(position:position) {
        this.position = position;
        this.appList = [] as Array< HTMLElement >;
    }

    /**
     * @description 在尾部添加一个元素
     * @param el
     */
    push(el: HTMLElement) {
        this.appList.push(el);
        this.update();
    }

    /**
     * @description 删除一个元素
     * @param el
     */
    delete(el:HTMLElement) {
        const pos = this.appList.indexOf(el);
        this.appList.splice(pos, 1);
        this.update();
    }

    /**
     * @description 下一个元素的位置
     */
    nextPos() {
        let res = 0;
        this.appList.forEach(item => {
            res += parseInt(item.getAttribute('data-space') as string) + item.offsetHeight;
        })
        return res;
    }

    getEl(index:number):HTMLElement | undefined {
        return this.appList[index];
    }

    getIndexOf(el:HTMLElement) :number {
        return this.appList.indexOf(el);
    }
    /**
     * @description 更新元素位置
     * @protected
     */
    protected update(){
        if (this.position === 'up') {
            this._layoutUp();
        }
        if (this.position === 'down') {
            this._layoutDown();
        }
    }



    protected _layoutUp(){
        let bottom = 0;
        this.appList.forEach(item => {
            bottom += parseInt(item.getAttribute('data-space') as string);
            item.style.bottom = `${bottom}px`;
            bottom += item.offsetHeight;
        })
    }
   protected  _layoutDown() {
       let top = 0;
       this.appList.forEach(item => {
           top += parseInt(item.getAttribute('data-space') as string);
           item.style.top = `${top}px`;
           top += item.offsetHeight;
       })
    }

}


export {
    LayoutManager
}