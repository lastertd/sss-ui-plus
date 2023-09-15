export type BadgeType = 'primary' | 'waring' |'danger' |'info' | 'cyan';
class Badge {
    protected element: HTMLElement
    protected parent: HTMLElement | null
    protected type:string

    constructor(type:BadgeType = 'primary') {
        this.element = document.createElement('span');
        this.element.classList.add('s-badge');
        this.element.classList.add(`s-badge__${type}`);
        this.type = type;

        this.parent = null;

    }

    public getElement():HTMLElement{
        return this.element
    }
    public mountTo(parent: HTMLElement) {
        this.parent = parent;
        this.parent.classList.add('is-relative');
        this.parent.appendChild(this.element);

    }
    public unMount(){
        if (!this.parent) {
            return
        }
        this.parent.removeChild(this.element);
        this.parent.classList.remove('is-relative');

    }
    public show(){
        this.element.classList.remove('is-invisible');

    }
    public hidden(){
        this.element.classList.add('is-invisible');
    }
    public setTxt(val: string|number){
        this.element.innerText = val.toString();
    }


}


export {
    Badge,
}
