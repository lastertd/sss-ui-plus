import {computed, getCurrentInstance, useAttrs as _useAttrs} from "vue";

type F = 'scoped' | 'scopedOnly' | undefined;


/**
 * 针对使用fragment,teleport类型的组件时, 不会为节点添加scopeID的bug
 * 在未来可能被移除
 * @param flag
 */
export const useAttrs = function (flag?: F) {



    switch (flag) {
        case 'scoped':
            return computed(() => {
                const scopeID = getScopedID();
                if (scopeID) {
                    return {
                        [scopeID]: '',
                        ..._useAttrs(),
                    }
                }
                return {
                    ..._useAttrs(),
                }
            })
        case 'scopedOnly':
            return computed(() => {
                const scopeID = getScopedID();
                if (scopeID) {
                    return {
                        [scopeID]: '',
                    }
                }
                return {}
            })
        default:
            return computed(() => {
                return {
                    ..._useAttrs()
                }
            })


    }


}

const getScopedID = () => {
    const attrs = useAttrs();
    let scopedID: string = getCurrentInstance()?.vnode.scopeId ?? '';

    for (let valueKey in attrs.value) {
        if (valueKey.startsWith('data-v-')) {
            scopedID = valueKey;
            break;
        }
    }

    return scopedID;

}

