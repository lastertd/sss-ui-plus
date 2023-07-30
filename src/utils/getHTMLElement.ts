import {Ref} from "vue";

/**
 * @description 用于获取ref引用的真实dom节点, 需要注意调用的时候ref对象时候有值
 */
const getHTMLElement = function (targetRef: Ref<any>) :HTMLElement {
    const tmp: any = targetRef.value;
    if (tmp instanceof HTMLElement){
         return tmp
    }
    else return tmp.$el
}

export default getHTMLElement