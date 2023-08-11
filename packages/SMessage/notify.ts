import MsgExecutor from "../SMessageBox/src/msgBox.vue";
import { createApp} from "vue";
import indexManager from "../../src/utils/managers/IndexManager";
import LayoutManager from "../../src/utils/managers/LayoutManager";
import delay from "../../src/utils/delay";
import {MessageTypes} from "../../src/types";
import MsgBox from "../SMessageBox/src/msgBox.vue";



type positions = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';




interface options {
    /**
     * @description 通知的类型
     */
    type: MessageTypes,
    /**
     * @description 通知的图标
     */
    icon:string,
    /**
     * @description 通知的标题
     */
    title:string,
    /**
     * @description 通知的主体
     */
    text:string,
    /**
     * @description 通知的存活时间
     */
    timeout:number,
    /**
     * @description 距离上一个通知的间距
     */
    offset:number,
    /**
     * @description 通知的方位
     */
    placement:positions
}

// 管理notify的位移
const autoLayoutDown = new LayoutManager('down');
const autoLayoutDown2 = new LayoutManager('down');
const autoLayoutUp = new LayoutManager('up');
const autoLayoutUp2 = new LayoutManager('up');


/**
 * @description 向管理器中添加节点
 * @param el
 * @param placement
 */
const push = function (el:HTMLElement, placement: positions) {
    if (placement === 'top-right') {
        autoLayoutDown.push(el);
    }
    else if (placement === 'bottom-right') {
        autoLayoutUp.push(el);
    }
    else if (placement === 'top-left') {
        autoLayoutDown2.push(el);

    }
    else if (placement === 'bottom-left') {
        autoLayoutUp2.push(el);
    }
}

/**
 * @description 从管理器中删除节点
 * @param mountTo
 * @param placement
 */
const close = function (mountTo:HTMLElement, placement: positions) {
    if (placement === 'top-right') {
        autoLayoutDown.delete(mountTo);
    }
    else if (placement === 'bottom-right') {
        autoLayoutUp.delete(mountTo);
    }
    else if (placement === 'top-left') {
        autoLayoutDown2.delete(mountTo);

    }
    else if (placement === 'bottom-left') {
        autoLayoutUp2.delete(mountTo);
    }


}



export default async function (options:Partial<options>) {
    const {timeout = 3000, placement = 'top-right', offset = 10} = options;
    const app = createApp(MsgExecutor,{
        type:options.type,
        icon:options.icon,
        title:options.title,
        text:options.text,
        showHead:true,
        showBody:true,
        showClose:true,
        transition: (placement === "top-left" || placement === 'bottom-left') ? 'notify-left':'notify-right',
        onClose(){
            close(mountTo, placement);
            delay(500).then(() => {
                appendTo.removeChild(mountTo);
                app.unmount();
            })

        }
    });
    const mountTo = document.createElement('div');
    const appendTo = document.body;



    const vm = app.mount(mountTo) as InstanceType<typeof MsgBox>;
    initMountTo(mountTo, placement, offset);
    appendTo.appendChild(mountTo);


    vm.open();


    push(mountTo, placement);

    // 不会自动关闭
    if (timeout === 0){
        return
    }

    await delay(timeout);
    vm.close('system');








}


/**
 * @description 初始化消息的容器元素
 * @param el
 * @param placement
 * @param offset
 */
const initMountTo = function (el:HTMLElement, placement:string, offset:number) {
    el.classList.add(`pos-${placement}`);
    el.setAttribute('data-space',offset.toString());


    // 修改即将出现的el的位移
    if (placement === 'top-right') {
        el.style.top = `${autoLayoutDown.next()}px`;
    }
    else if (placement === 'top-left') {
        el.style.top = `${autoLayoutDown2.next()}px`;
    }
    else if (placement === 'bottom-right' ) {
        el.style.bottom = `${autoLayoutUp.next()}px`;
    }
    else if(placement === 'bottom-left') {
        el.style.bottom = `${autoLayoutUp2.next()}px`;

    }
    el.classList.add('sss-message-notify-container')
    el.style.zIndex = indexManager.nextIndex().toString();


}