import {isEmpty, isNumber, isString} from "./types";
import {ElementTypes} from "@sss-ui-plus/typings";


type Des = 'fade' |'light' |'lighter' |'dark';

type Clr = ElementTypes | 'primary' | 'cyan' | 'gray' | Des | undefined

/**
 * @description 拼接css颜色变量字符串
 * @param args
 */
export const getClrVar = function (...args: Array<Clr>): string {

    // 各参数中有一个为空则返回空字符串
    for (let item of args) {
        if (!isString(item)) {
            return '';
        }
    }

    const strList = Array.from(args.map(item => item));
    const str = strList.join('-');
    return `var(--sss-color-${str})`;
}


export const px = (num: number | undefined | string, dft?: number): string => {
    if (isEmpty(num) && !isEmpty(dft)) {
        return `${dft}px`

    }
    if (isNumber(Number(num))) {
        return `${num}px`
    }
    return '0'
}

