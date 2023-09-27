import {ComputedRef, onUnmounted, Ref, watch} from "vue";
import {noop, unrefElement, VueInstance} from "@vueuse/core";
import {Badge, BadgeType} from "@sss-ui-plus/utils";

type targetType = Ref<HTMLElement | undefined | null | VueInstance> | HTMLElement;

interface BadgeOptions {
    value: Ref<string | number> | ComputedRef<any>
    type?: BadgeType,
    theme?: Ref<string[]>
}

/**
 * @description 为某个元素使用badge
 * @param target 目标元素
 * @param options 配置选项
 */
export const useBadge = function (target: targetType, options: BadgeOptions) {
    const {value, type, theme} = options;
    const badge = new Badge(type);
    let cleanup = noop;


    const themeWatcher = watch(() => theme?.value, (klsList) => {
        badge.getElement().classList.remove('s-badge--light')
        badge.getElement().classList.remove('s-badge--dark');

        klsList?.forEach((kls) => badge.getElement().classList.add(kls));

    }, {immediate: true});


    const targetWatcher = watch(() => {
        if (target instanceof HTMLElement) {
            return target
        }
        if (!target.value) {
            return void 0;
        }
        return unrefElement(target)
    }, (el) => {
        cleanup();
        if (!el) {
            return void 0;
        }

        badge.mountTo(el as HTMLElement);

        cleanup = () => {
            badge.unMount();
            cleanup = noop;
        }


    }, {immediate: true})

    const valueWatcher = watch(() => {
        return value?.value;
    }, (value) => {
        if (value === undefined || value === null) {
            return;
        }
        badge.setTxt(value);
    }, {immediate: true})


    const stop = () => {
        cleanup();
        themeWatcher();
        targetWatcher();
        valueWatcher();
    }

    onUnmounted(() => {
        stop();
    })


    // notice: 返回的函数写成匿名函数或者bind函数避免丢失上下文
    // egs: setTxt:badge.setTxt会丢失上下文
    return {
        /**
         * @description 停止使用badge
         */
        stop,
        /**
         * @description 显示badge
         */
        show: badge.show.bind(badge),
        /**
         * @description 隐藏badge
         */
        hidden: badge.hidden.bind(badge),
        /**
         * @description 设置badge内部文本
         */
        setTxt: badge.setTxt.bind(badge)

    }


}