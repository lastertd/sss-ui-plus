import {onUnmounted, Ref, watch} from "vue";
import {noop, unrefElement} from "@vueuse/core";
import {Mark, MarkType} from "@sss-ui-plus/utils"


/**
 * @description 遮罩的类型
 */

type targetType = Ref<HTMLElement | undefined | null> | HTMLElement

/**
 * @description 在el中添加一个遮罩元素
 * @param target 需要添加遮罩的元素, 可以是ref实例，也可以是一个html节点
 * @param markType  cover将会覆盖整个视口，part只会覆盖元素本身
 */
export const useMark =  function (target: targetType, markType?: MarkType) {



    const mark = new Mark(markType);
    let cleanup = noop;



    const stop = watch(
        () => {
            if (target instanceof HTMLElement) return target;
            else  return unrefElement(target)
        },
        (el) => {

            cleanup();
            if (!el) return;


            el.appendChild(mark.element);

            cleanup = () => {
                el.removeChild(mark.element);
                cleanup = noop;
            }


        }
    )

    onUnmounted(() => {
        stop();
        cleanup();
    })


    return {
        mark:mark.element,
        showMark:() => mark.open(),
        hiddenMark:() => mark.close()
    }

}
