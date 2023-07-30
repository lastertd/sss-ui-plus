/**
 * @description
 * 防抖装饰器。
 * 注意fn必须是空返回值。
 * 新函数没有返回值。
 * @param fn
 * @param context
 * @param timeout
 */

const debounce = function (fn:() => void, context:object, timeout:number = 0):Function {
    let timer:any;

    return function (...args: any){
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(context, args);
        },timeout)
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
const asyncDebounce = function (fn:Function, context:object, timeout:number = 0):Function {
    let timer:any;
    return  function (...args: any): Promise<any>{
        clearTimeout(timer);

        return new Promise((resolve) => {
            timer = setTimeout(() => {
                resolve(fn.apply(context, args));
            },timeout)
        })
    }
}


export {
    debounce,
    asyncDebounce
}

export default debounce