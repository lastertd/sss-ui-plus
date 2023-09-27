const defaultNS = 's';

const statusPrefix = 'is';


interface IS{
    (status?:string):string,
    (status:boolean, s:string):string
}


export const useNS = function (name: string) {
    const namespace = `${defaultNS}-${name}`;
    const e = (block?: string) => {
        return block ? `${namespace}__${block}` : '';
    }

    const m = (modifier?: string) => {
        return modifier ? `${namespace}--${modifier}` : '';
    }

    const em = (block?: string, modifier?: string) => {
        return block && modifier ? `${namespace}__${block}__${modifier}` : '';
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
        e,
        m,
        em,
        is
    }

}

