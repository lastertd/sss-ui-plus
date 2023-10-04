import {isString} from "@vue/shared";

const getClrVar = function (...args: string[]) {
    for (let item of args) {
        if (!isString(item)) {
            return '';
        }
    }

    const strList = Array.from(args.map(item => item));
    const str = strList.join('-');
    return `var(--sss-color-${str})`;
}

export {
    getClrVar
}