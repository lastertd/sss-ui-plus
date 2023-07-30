/**
 * @description
 * 节流装饰器
 * 注意fn空返回值
 * 新函数无返回值
 * @param fn
 * @param context
 * @param timeout
 */
const throttle = function (fn: Function, context: object, timeout: number) {
    let timeFlag: number = 0;

    return function (...args: any): void {
        const now: number = new Date().getTime();

        if ( (now - timeFlag) >= timeout ) {
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
const asyncThrottle = function (fn:Function, context: object, timeout: number):Function {
    let timeFlag: number = 0;

    return function (...args: any):Promise<any>{
        const now: number = new Date().getTime();

        return new Promise((resolve) => {
            if ( (now - timeFlag) >= timeout ) {
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