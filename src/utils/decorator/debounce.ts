import {AnyFunction} from "../../types";

/**
 * @description
 * 防抖装饰器。
 * 注意fn必须是空返回值。
 * 新函数没有返回值。
 * @param fn
 * @param context
 * @param timeout
 */

const debounce = function <T extends AnyFunction>(fn: T, timeout: number = 0, context?: object) {
    let timer: any;

    return function (...args: Parameters<T>): void {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(context, args);
        }, timeout)
    }
}


/**
 * @description
 * 异步防抖装饰器。
 * fn必须有返回值。
 * 新函数返回原值。
 * @param fn
 * @param context
 * @param timeout
 */
const asyncDebounce = function <T extends AnyFunction>(fn: T, timeout: number = 0, context?: object) {
    let timer: any;
    return function (...args: Parameters<T>): Promise<ReturnType<T>> {
        clearTimeout(timer);

        return new Promise((resolve) => {
            timer = setTimeout(() => {
                resolve(fn.apply(context, args));
            }, timeout)
        })
    }
}


export {
    debounce,
    asyncDebounce
}

export default debounce