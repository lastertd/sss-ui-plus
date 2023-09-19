import {noop} from "@vueuse/core";


export declare type MarkType = 'cover' | 'part';
class Mark {
    readonly element: HTMLElement
    protected closed: () => void
    // 锁，控制open close函数轮番执行
    protected flag:boolean

    constructor(type: MarkType = 'cover') {
        this.element = document.createElement('div');
        this.flag = false;
        this.closed = noop;
        if (type === 'cover') {
            this.element.classList.add('sss-mark-cover');
            this.element.style.zIndex = '-1';

        } else if (type === 'part') {
            this.element.classList.add('sss-mark-part');

        }

    }

    open() {
        if (this.flag){
            return
        }
        this.flag = true;
        const handleAnimationend = () => {
            this.element.classList.remove('sss-transition-fadeIn');
            this.element.removeEventListener('animationend', handleAnimationend)
        }

        this.element.removeEventListener("animationend", this.closed);
        this.element.style.display = 'unset';
        this.element.classList.add('sss-transition-fadeIn');
        this.element.addEventListener('animationend', handleAnimationend);
    }


    close() {
        if (!this.flag){
            return
        }
        this.flag = false
        this.closed = () => {
            this.element.classList.remove('sss-transition-fadeOut');
            this.element.style.display = 'none';
            this.element.removeEventListener('animationend', this.closed)
        }

        this.element.classList.add('sss-transition-fadeOut');
        this.element.addEventListener('animationend', this.closed)
    }


}
export {
    Mark,
}


