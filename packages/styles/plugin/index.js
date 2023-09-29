

const getVar = function (...args) {
    const strList = Array.from(args.map(item => item.value));
    const str = strList.join('-');
    return `var(--sss-${str})`;
}

const getClrVar = function (...args){
    const strList = Array.from(args.map(item => item.value));
    const str = strList.join('-');
    return `var(--sss-color-${str})`;
}
const b = function (b){

    return b.value;
}
const be = function (b,e){

    return `${b.value}__${e.value}`
}
const bm = function (b,m){
    return `${b.value}--${m.value}`

}

const is = function (s){
    return  `is-${s.value}`;
}




module.exports = {
    install: function (less, pluginManager, functions) {
        functions.add('getVar', getVar);
        functions.add('getClrVar', getClrVar);
        functions.add('b', b);
        functions.add('be', be);
        functions.add('bm', bm);
        functions.add('is', is);

    },

};