// GlobalComponents for Volar
declare module '@vue/runtime-core' {
    export interface GlobalComponents {
        SButton: typeof import('sss-ui-plus')['SButton'],
        SInput: typeof import('sss-ui-plus')['SInput'],
        SIcon: typeof import('sss-ui-plus')['SIcon'],
        SLink: typeof import('sss-ui-plus')['SLink'],
        SDivider: typeof import('sss-ui-plus')['SDivider'],
        SDialog: typeof import('sss-ui-plus')['SDialog'],
        SDrawer: typeof import('sss-ui-plus')['SDrawer'],
        SRow: typeof import('sss-ui-plus')['SRow'],
        SSwitch: typeof import('sss-ui-plus')['SSwitch'],
        SFloating: typeof import('sss-ui-plus')['SFloating'],
        STooltip: typeof import('sss-ui-plus')['STooltip'],
        SPopconfirm: typeof import('sss-ui-plus')['SPopconfirm'],
        SDropdown: typeof import('sss-ui-plus')['SDropdown'],
        SDropdownItem: typeof import('sss-ui-plus')['SDropdownItem'],
        SScrollbar: typeof import('sss-ui-plus')['SScrollbar'],
        SCascader: typeof import('sss-ui-plus')['SCascader'],
        SSkeleton: typeof import('sss-ui-plus')['SSkeleton'],
        SSkeletonItem: typeof import('sss-ui-plus')['SSkeletonItem'],


    }

    interface ComponentCustomProperties {
        $message: typeof import('sss-ui-plus')['message'],
        $notify: typeof import('sss-ui-plus')['notify'],
        $confirm: typeof import('sss-ui-plus')['confirm'],
    }


}

export {}
