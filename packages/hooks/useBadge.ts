import {ComputedRef, onUnmounted, Ref, watch} from "vue";
import {noop, unrefElement, VueInstance} from "@vueuse/core";
import {Badge, BadgeType} from "@sss-ui-plus/utils";

type targetType = Ref<HTMLElement | undefined | null | VueInstance> | HTMLElement;

export const useBadge = function (target: targetType, badgeType?: BadgeType, value?: Ref<string | number> | ComputedRef<any>) {

    const badge = new Badge(badgeType);
    let cleanup = noop;

    const stop = watch(() => {
        if (target instanceof HTMLElement){
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


    }, {immediate:true})

    const stop2 = watch(() => {
        return value?.value;
    }, (value) => {
        if (value === undefined || value === null) {
            return;
        }
        badge.setTxt(value);
    }, {immediate: true})


    onUnmounted(() => {
        stop();
        cleanup();
        stop2();
    })


    // notice: 返回的函数写成匿名函数或者bind函数避免丢失上下文
    // egs: setTxt:badge.setTxt会丢失上下文
    return {
        stop: () => {
            stop();
            cleanup();
            stop2();
        },
        show: badge.show.bind(badge),
        hidden: badge.hidden.bind(badge),
        setTxt: badge.setTxt.bind(badge)

    }


}