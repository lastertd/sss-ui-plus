/**
 * @description 提供警告消息
 */
class Alert {
    protected element: HTMLElement
    protected icon: HTMLElement
    protected text: Text
    protected parent: HTMLElement | null
    protected iconCls: string
    protected isVisible: boolean
    // 动画帧分别指定,避免造成视觉上的突变, 当然这个动画持续时间很短，这点可以忽略不计
    // 需要注意的是，showKeyFrames第一次执行时，第一帧的状态由元素初始状态决定
    static showKeyframes:Keyframe[] = [
        {},
        {
            userSelect: 'unset',
            transform: 'translateY(0)',
            opacity: 1
        }
    ]
    static hiddenKeyframes:Keyframe[] = [
        {},
        {
            userSelect: 'none',
            transform: 'translateY(-15px)',
            opacity: 0

        },
    ]



    constructor(text: string = 'data error!', icon: string = 'sss-danger') {
        this.initEle(icon, text);
        this.parent = null;
        this.isVisible = false;
    }

    protected initEle(icon: string, text: string) {
        this.element = document.createElement('label');
        this.element.classList.add('s-alert');

        this.icon = document.createElement('span');
        this.iconCls = icon;
        this.icon.classList.add('iconfont');
        this.icon.classList.add(icon);

        this.text = document.createTextNode(text);

        this.element.appendChild(this.icon);
        this.element.appendChild(this.text);


    }

    mountTo(parent: HTMLElement) {
        this.parent = parent;
        this.parent.classList.add('is-relative');
        this.parent.appendChild(this.element);
    }

    unMount() {
        if (!this.parent) return;
        this.parent.removeChild(this.element);
        this.parent.classList.remove('is-relative');
        this.parent = null;
    }

    show() {
        if (!this.parent || this.isVisible) return;

        this.isVisible = true;

        this.element.animate(Alert.showKeyframes, {
            duration: 300,
            fill: "forwards",
            easing:'cubic-bezier(0.23, 1, 0.72, 1)'

        })
    }

    hidden() {
        if (!this.parent || !this.isVisible) return

        this.isVisible = false

        this.element.animate(Alert.hiddenKeyframes, {
            duration: 300,
            fill: "forwards",
            easing:'cubic-bezier(0.72, 1, 0.23, 1)'
        })
    }

    toggle() {
        if (this.isVisible) this.hidden();
        else this.show();
    }

    setIcon(icon: string = 'sss-danger') {
        this.icon.classList.remove(this.iconCls);
        this.icon.classList.add(icon);
        this.iconCls = icon;
    }

    setText(text: string = 'data-error!') {
        this.text.nodeValue = text;
    }

    getEle(){
        return this.element
    }


}

export {Alert}