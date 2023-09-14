declare module '@vue/runtime-core' {
    export interface GlobalComponents {
        SButton: typeof import('../components')['SButton'],
        SInput: typeof import('../components')['SInput'],
        SIcon: typeof import('../components')['SIcon'],
        SLink: typeof import('../components')['SLink'],
        SDivider: typeof import('../components')['SDivider'],
        SDialog: typeof import('../components')['SDialog'],
        SDrawer: typeof import('../components')['SDrawer'],
        SRow: typeof import('../components')['SRow'],
        SSwitch: typeof import('../components')['SSwitch'],
        SFloating: typeof import('../components')['SFloating'],
        STooltip: typeof import('../components')['STooltip'],
        SPopconfirm: typeof import('../components')['SPopconfirm'],
        SDropdown: typeof import('../components')['SDropdown'],
        SDropdownItem: typeof import('../components')['SDropdownItem'],
        SScrollbar: typeof import('../components')['SScrollbar'],
        SCascader: typeof import('../components')['SCascader'],
        SSkeleton: typeof import('../components')['SSkeleton'],
        SSkeletonItem: typeof import('../components')['SSkeletonItem'],


    }

    interface ComponentCustomProperties {
        $message: typeof import('sss-ui-plus')['message'],
        $notify: typeof import('sss-ui-plus')['notify'],
        $confirm: typeof import('sss-ui-plus')['confirm'],
    }


}

export {}
