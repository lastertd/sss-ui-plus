import {noop} from "@vueuse/core";


export declare type MarkType = 'cover' | 'part';

class Mark {
    readonly element: HTMLElement
    // 锁，控制open close函数轮番执行
    protected flag: boolean
    // 动画关键帧
    static keyframes: Keyframe[] = [
        {
            opacity: 0,
            display: 'none'
        },
        {
            opacity: 1,
            display: 'unset'
        }
    ]

    constructor(type: MarkType = 'cover') {
        this.element = document.createElement('div');
        this.flag = false;

        if (type === 'cover') {
            this.element.classList.add('sss-mark-cover');
            this.element.style.zIndex = '-1';

        } else if (type === 'part') {
            this.element.classList.add('sss-mark-part');

        }

    }

    open() {

        if (this.flag) {
            return
        }
        this.flag = true;


        this.element.animate(Mark.keyframes, {
            duration: 300,
            fill: "forwards"
        });
    }


    close() {
        if (!this.flag) {
            return
        }
        this.flag = false

        this.element.animate(Mark.keyframes, {
            duration: 300,
            fill: "forwards",
            direction: "reverse"
        });
    }


}

export {
    Mark,
}


