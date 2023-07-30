import getHTMLElement from "../utils/getHTMLElement.ts";
import {Ref} from "vue";


/**
 * @description 遮罩的类型
 */
type MarkType = 'cover' | 'part';

type targetType = Ref<Element | undefined> | Ref<HTMLElement | undefined> | HTMLElement

/**
 * @description 在el中添加一个遮罩元素
 * @param target 需要添加遮罩的元素, 可以是ref实例，也可以是一个html节点
 * @param markType  cover将会覆盖整个视口，part只会覆盖元素本身
 */
export default  function (target:targetType, markType:MarkType) {


    let el:HTMLElement;
    const mark  = createMark(markType);



    const appendMark = function (){
        if(target instanceof HTMLElement){
            el = target;
            el.appendChild(mark);

        }
        else {
            el = getHTMLElement(target);
            el.appendChild(mark);
        }
    }



    const showMark =  function (){
        const handleAnimationend = function (){
            mark.classList.remove('sss-transition-fadeIn');
            mark.removeEventListener('animationend',handleAnimationend)
        }


        appendMark();
        mark.style.display = 'unset';
        mark.classList.add('sss-transition-fadeIn');
        mark.addEventListener('animationend',handleAnimationend)
    }

    const hiddenMark =  function (){
        const handleAnimationend = function (){
            mark.classList.remove('sss-transition-fadeOut');
            mark.removeEventListener('animationend',handleAnimationend)
            mark.style.display = 'none';

        }

        mark.classList.add('sss-transition-fadeOut');
        mark.addEventListener('animationend',handleAnimationend)


    }



    return {
        mark,
        showMark,
        hiddenMark
    }

}

const createMark = function (markType:MarkType){
    const mark = document.createElement('div');
    if (markType === 'cover'){
        mark.classList.add('sss-mark-cover');
        mark.style.zIndex = '-1';

    }else if (markType === 'part') {
        mark.classList.add('sss-mark-part');

    }



    return mark;
}