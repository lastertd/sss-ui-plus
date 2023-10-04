export const isUndefined = (val: any): val is undefined => val === undefined
export const isBoolean = (val: any): val is boolean => typeof val === 'boolean'
export const isNumber = (val: any): val is number => typeof val === 'number'
export const isArray = (val: any): val is Array<any> => Array.isArray(val)
export const isFunction = (val: any): val is Function => typeof val === 'function'

