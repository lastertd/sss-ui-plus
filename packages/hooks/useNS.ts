const defaultNS = 's';

const statusPrefix = 'is';


interface IS {
    (status?: string): string,

    (status?: string, f?: boolean): string,

    (status: boolean, s: string): string
}


export const useNS = function (name: string) {
    const namespace = `${defaultNS}-${name}`;

    const b = (block?: string) => {
        return block ? `${namespace}-${block}` : '';

    }
    const e = (element?: string) => {
        return element ? `${namespace}__${element}` : '';
    }


    const m = (modifier?: string) => {
        return modifier ? `${namespace}--${modifier}` : '';
    }

    const ee = (ele1?: string, ele2?: string) => {
        return ele1 && ele2 ? `${namespace}__${ele1}__${ele2}` : '';
    }

    const bb = (block1?: string, block2?: string) => {
        return block1 && block2 ? `${namespace}-${block1}-${block2}` : '';
    }

    const be = (block: string, element: string, flag?: boolean) => {
        if (typeof flag === "boolean") {
            return block && element && flag ? `${namespace}-${block}__${element}` : '';
        }
        return block && element ? `${namespace}-${block}__${element}` : '';
    }
    const bm = (block: string, modifier: string, flag?: boolean) => {
        if (typeof flag === 'boolean') {
            return block && modifier && flag ? `${namespace}-${block}--${modifier}` : '';
        }
        return block && modifier ? `${namespace}-${block}--${modifier}` : '';
    }

    /**
     * @description 在该命名空间下创建element with modifier
     * @param element 元素
     * @param modifier 修饰
     * @param flag 判决变量, 可选参数
     */
    const em = (element?: string, modifier?: string, flag?: boolean) => {
        if (typeof flag === "boolean") {
            return element && modifier && flag ? `${namespace}__${element}--${modifier}` : '';
        }
        return element && modifier ? `${namespace}__${element}--${modifier}` : '';

    }

    const is: IS = (status?: boolean | string, s?: string | boolean) => {

        if (typeof status === "string") {
            if (typeof s === 'boolean') {
                return s ? `${statusPrefix}-${status}` : '';
            }
            return `${statusPrefix}-${status}`;
        }
        if (typeof status === 'boolean' && status) {
            return `${statusPrefix}-${s}`;
        }

        return '';

    }


    return {
        namespace,
        b,
        e,
        m,
        bb,
        ee,
        be,
        bm,
        em,
        is
    }

}

