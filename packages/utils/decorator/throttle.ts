type AnyFunction = (...args:any) => any

/**
 * @description
 * 节流装饰器, fn返回值将被忽略
 * @param fn
 * @param timeout default = 0
 * @param context 执行上下文
 */
const throttle = function <T extends AnyFunction>(fn: T, timeout: number = 0, context?: object) {
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
 * 异步节流装饰器, 适用于fn需要返回值的时候
 * @param fn
 * @param timeout default = 0
 * @param context 执行上下文
 */
const asyncThrottle = function <T extends AnyFunction>(fn: T, timeout: number = 0, context?: object) {
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

