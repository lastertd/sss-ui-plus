/**
 * @description 将函数聚合，不负责返回值
 * @param args 函数体
 */
export const fnUnion = function (...args:Array<Function>) {
    return function (){
        for (let i = 0; i < args.length; i++) {
            args[i]();
        }
    }
}

