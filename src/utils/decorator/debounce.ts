import {AnyFunction} from "../../types";

/**
 * @description
 * 防抖装饰器, fn返回值将被忽略
 * @param fn
 * @param timeout default = 0
 * @param context 执行上下文
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
 * 异步防抖装饰器, 适用于fn需要返回值的时候
 * @param fn
 * @param timeout default = 0
 * @param context 执行上下文
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