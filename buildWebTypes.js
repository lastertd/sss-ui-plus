
import helper from "components-helper"


helper({
    name: 'sss-ui-plus',
    version: '0.2.0-beta.17',
    entry: 'docs/comps/**/*.md',
    outDir: '.',
    reComponentName,
    reDocUrl,
    reAttribute,
    reWebTypesSource,
    space: 2,

    props:'props',
    propsName:'属性名',
    propsDescription:'说明',
    propsType:'类型',
    propsDefault:'默认值'


})

function reComponentName(title) {
    return (
        's-' +
        title
            .replace(/\B([A-Z])/g, '-$1')
            .replace(/[ ]+/g, '-')
            .toLowerCase()
    )
}

function reWebTypesSource(title) {
    const symbol =
        'S' +
        title
            .replace(/-/, ' ')
            .replace(/^\w|\s+\w/g, (item) => item.trim().toUpperCase())

    return { symbol }
}

function reDocUrl(fileName, header, path) {
    const url = (path.split('/').slice(1,-1).join('/') +'/').toLowerCase()
    const docs = 'https://sssui.4everland.app/'
    const _header = header ? header.replace(/[ ]+/g, '-') : undefined
    return docs + url + (_header ? ('#' + _header).toLowerCase() : '')
}

function reAttribute(str, key) {
    switch (str) {
        case '':
        case '-':
        case '—':
            return undefined
        case 'v-model':
            return 'model-value'
        default:
            if (key === 'Subtags') {
                return str
                    ? str
                        .split('/')
                        .map((name) => reComponentName(name.trim()))
                        .join('/')
                    : str
            } else {
                return str
            }
    }
}