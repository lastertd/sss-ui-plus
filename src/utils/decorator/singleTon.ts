type AnyConstructor = new (...args: any[]) => any;
const singleTon = function <T extends AnyConstructor>(classType: T) {
    let instance: T;
    return new Proxy(classType, {
        construct(target, args) {
            return instance ? instance : instance = new target(...args);
        }
    })
}

export {
    singleTon
}