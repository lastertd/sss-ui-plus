import {onUnmounted, Ref, ref, watch, isRef} from "vue";
import {Alert} from "@sss-ui-plus/utils";
import {noop, unrefElement} from "@vueuse/core";

export default function (
    target: Ref<HTMLElement | null | undefined>,
    icon: string | Ref<string | undefined> = 'sss-danger',
    text: string | Ref<string | undefined> = 'data error!'
) {
    const refIcon = isRef(icon) ? icon : ref<string>(icon);
    const refText = isRef(text) ? text : ref<string>(text);


    const alert = new Alert(refText.value, refIcon.value);


    let cleanup = noop;

    const targetWatcher = watch(() => {
            return unrefElement(target)
        },
        (el) => {
            cleanup();
            if (!el) return;

            alert.mountTo(el);

            cleanup = () => {
                alert.unMount();
                cleanup = noop;
            }

        })

    const iconWatcher = watch(() => refIcon.value, (icon) => {
        // 注意空字符串也会被排除
        if (!icon) return;
        if (!target.value) return;

        alert.setIcon(icon);

    })

    const textWatcher = watch(() => refText.value, (text) => {
        // 注意空字符串也会被排除
        if (!text) return;
        if (!target.value) return;

        alert.setText(text);
    })

    let stop = () => {
        cleanup();
        targetWatcher();
        iconWatcher();
        textWatcher();
        stop = noop
    }

    onUnmounted(() => {
        stop();
    })


    return {
        /**
         * @description 响应式icon
         */
        icon: refIcon,
        /**
         * @description 响应式text
         */
        text: refText,
        /**
         * @description 显示alert
         */
        show: () => alert.show(),
        /**
         * @description 隐藏alert
         */
        hidden: () => alert.hidden(),
        /**
         * @description 显示/隐藏alert
         */
        toggle: () => alert.toggle(),
        /**
         * @description 停止使用alert
         */
        stop,

    }

}