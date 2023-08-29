import {AnyFunction} from "../../types";

/**
 * @description
 * 节流装饰器
 * 注意fn空返回值
 * 新函数无返回值
 * @param fn
 * @param context
 * @param timeout
 */
const throttle = function <T extends AnyFunction>(fn: T, timeout: number, context?: object) {
    let timeFlag: number = 0;

    return function (...args: Parameters<T>): void {
        const now: number = new Date().getTime();

        if ((now - timeFlag) >= timeout) {
            timeFlag = now;
            fn.apply(context, args);
        }
    }
}

/**
 * @description
 * 异步节流装饰器。
 * 注意fn需要有返回值
 * 新函数返回原值
 * @param fn
 * @param context
 * @param timeout
 */
const asyncThrottle = function <T extends AnyFunction>(fn: T, timeout: number, context?: object) {
    let timeFlag: number = 0;

    return function (...args: Parameters<T>): Promise<ReturnType<T>> {
        const now: number = new Date().getTime();

        return new Promise((resolve) => {
            if ((now - timeFlag) >= timeout) {
                timeFlag = now;

                resolve(fn.apply(context, args));
            }

        })

    }
}

export {
    throttle,
    asyncThrottle
}

export default throttle