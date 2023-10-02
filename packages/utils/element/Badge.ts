import {useNS} from "@sss-ui-plus/hooks";

export declare type BadgeType = 'primary' | 'waring' | 'danger' | 'info' | 'cyan';
export declare type BadgeVariant = 'empty' | 'fantasy';

class Badge {
    protected element: HTMLElement
    protected parent: HTMLElement | undefined
    protected type: string
    protected variant: string | undefined
    protected ns: ReturnType<typeof useNS>
    static keyframes: Keyframe[] = [
        {transform: 'scale(.7) translate(50%,-50%)'},
        {}
    ]

    constructor(type?: BadgeType, variant?: BadgeVariant) {
        this.element = document.createElement('span');
        this.ns = useNS('badge');
        this.type = type;

        this.element.classList.add(this.ns.namespace);
        type && this.tp(type);
        variant && this.exp(variant);


    }

    /**
     * @description 获取badge对应dom
     */
    public getElement() {
        return this.element
    }

    /**
     * @description 将badge挂载到 parent元素下
     * @param parent 挂载目标
     */
    public mountTo(parent: HTMLElement) {
        if (this.parent) {
            return;
        }
        this.parent = parent;
        this.parent.classList.add('is-relative');
        this.parent.appendChild(this.element);


    }

    /**
     * @description 将badge从parent上卸载
     */
    public unMount() {
        if (!this.parent) {
            return
        }
        this.parent.removeChild(this.element);
        this.parent.classList.remove('is-relative');

    }

    public exp(variant: BadgeVariant) {
        if (this.variant) {
            this.element.classList.remove(this.ns.m(this.variant));
        }
        this.variant = variant;
        this.element.classList.add(this.ns.m(variant));

    }

    public tp(type: BadgeType) {
        if (this.type) {
            this.element.classList.remove(this.ns.m(this.type));
        }
        this.type = type;
        this.element.classList.add(this.ns.m(type));
    }

    /**
     * @description 显示badge元素
     */
    public show() {
        this.element.classList.remove('is-invisible');

    }

    /**
     * @description 隐藏badge元素
     */
    public hidden() {
        this.element.classList.add('is-invisible');
    }

    /**
     * @description 设置badge元素文本内容
     */
    public setTxt(val: string | number) {
        this.element.innerText = val.toString();
    }


}


export {
    Badge,
}
