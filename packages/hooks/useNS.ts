const defaultNS = 's';

const statusPrefix = 'is';


interface IS{
    (status?:string):string,
    (status:boolean, s:string):string
}


export const useNS = function (name: string) {
    const namespace = `${defaultNS}-${name}`;

    const b = (block?:string) => {
        return block ? `${namespace}-${block}` : '';

    }
    const e = (element?: string) => {
        return element ? `${namespace}__${element}` : '';
    }


    const m = (modifier?: string) => {
        return modifier ? `${namespace}--${modifier}` : '';
    }

    const be = (block:string, element:string) => {
        return block && element ? `${namespace}-${block}__${element}` : '';
    }
    const bm = (block:string, modifier:string) => {
        return block && modifier ? `${namespace}-${block}--${modifier}` : '';
    }

    const em = (element?: string, modifier?: string) => {
        return element && modifier ? `${namespace}__${element}--${modifier}` : '';
    }

    const is:IS = (status?: boolean | string, s?: string) => {

        if (typeof status === "string"){
            return`${statusPrefix}-${status}`;
        }
        if (typeof status === 'boolean' && status){
            return  `${statusPrefix}-${s}`;
        }

        return  '';

    }






    return {
        namespace,
        b,
        e,
        m,
        be,
        bm,
        em,
        is
    }

}

