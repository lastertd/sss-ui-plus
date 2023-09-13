declare module '@vue/runtime-core' {
    export interface GlobalComponents {
        SButton: typeof import('../../packages')['SButton'],
        SInput: typeof import('../../packages')['SInput'],
        SIcon: typeof import('../../packages')['SIcon'],
        SLink: typeof import('../../packages')['SLink'],
        SDivider: typeof import('../../packages')['SDivider'],
        SDialog: typeof import('../../packages')['SDialog'],
        SDrawer: typeof import('../../packages')['SDrawer'],
        SRow: typeof import('../../packages')['SRow'],
        SSwitch: typeof import('../../packages')['SSwitch'],
        SFloating: typeof import('../../packages')['SFloating'],
        STooltip: typeof import('../../packages')['STooltip'],
        SPopconfirm: typeof import('../../packages')['SPopconfirm'],
        SDropdown: typeof import('../../packages')['SDropdown'],
        SDropdownItem: typeof import('../../packages')['SDropdownItem'],
        SScrollbar: typeof import('../../packages')['SScrollbar'],
        SCascader: typeof import('../../packages')['SCascader'],
        SSkeleton: typeof import('../../packages')['SSkeleton'],
        SSkeletonItem: typeof import('../../packages')['SSkeletonItem'],


    }

    interface ComponentCustomProperties {
        $message: typeof import('sss-ui-plus')['message'],
        $notify: typeof import('sss-ui-plus')['notify'],
        $confirm: typeof import('sss-ui-plus')['confirm'],
    }


}

export {}
