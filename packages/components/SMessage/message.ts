import {App, createApp} from "vue";
import {IndexManager, delay, LayoutManager} from "@sss-ui-plus/utils";
import {MessageTypes} from "@sss-ui-plus/typings";
import {SMessageBoxInstance, SMessageBox} from "@sss-ui-plus/components";


interface options {
    /**
     * @description 消息的类型
     */
    type: MessageTypes,
    /**
     * @description 消息的图标
     */
    icon: string,
    /**
     * @description 消息的主体
     */
    text: string,
    /**
     * @description 消息的存活时间
     */
    timeout: number,
    /**
     * @description 距离上一个消息的间距
     */
    offset: number,

    showClose: Boolean,
}

// 管理notify的位移
const autoLayoutDown = new LayoutManager('down');


export default async function (options: Partial<options>) {
    const {timeout = 3000, offset = 10} = options;
    const app: App<Element> = createApp(SMessageBox, {
        type: options.type,
        icon: options.icon,
        title: options.text,
        showHead: true,
        showClose: options.showClose,
        transition: 'msg',
        onClose() {

            // 上一个节点聚焦
            (autoLayoutDown.getEl(autoLayoutDown.getIndexOf(mountTo) - 1)?.firstElementChild as HTMLElement)?.focus();

            autoLayoutDown.delete(mountTo);
            delay(500).then(() => {
                appendTo.removeChild(mountTo);
                app.unmount();
            })
        }
    });
    const mountTo: HTMLElement = document.createElement('div');
    const appendTo: HTMLElement = document.body;
    const vm = app.mount(mountTo) as SMessageBoxInstance;


    initMountTo(mountTo, offset);
    appendTo.appendChild(mountTo);


    vm.open();
    autoLayoutDown.push(mountTo);


    // 不会自动关闭
    if (timeout === 0) {
        return
    }

    await delay(timeout);

    vm.close('system');


}


const initMountTo = function (el: HTMLElement, offset: number) {
    el.classList.add('pos-top-center');
    el.classList.add('sss-message-msg-container')
    el.setAttribute('data-space', offset.toString());
    el.style.top = `${autoLayoutDown.nextPos()}px`;
    el.style.zIndex = new IndexManager().nextIndex().toString();


}


