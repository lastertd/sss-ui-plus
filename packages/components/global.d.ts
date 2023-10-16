declare module '@vue/runtime-core' {
    export interface GlobalComponents {
        SButton: typeof import('./index')['SButton'],
        SInput: typeof import('./index')['SInput'],
        SIcon: typeof import('./index')['SIcon'],
        SLink: typeof import('./index')['SLink'],
        SDivider: typeof import('./index')['SDivider'],
        SDialog: typeof import('./index')['SDialog'],
        SDrawer: typeof import('./index')['SDrawer'],
        SRow: typeof import('./index')['SRow'],
        SCol: typeof import('./index')['SCol'],
        SSwitch: typeof import('./index')['SSwitch'],
        SFloating: typeof import('./index')['SFloating'],
        STooltip: typeof import('./index')['STooltip'],
        SPopconfirm: typeof import('./index')['SPopconfirm'],
        SDropdown: typeof import('./index')['SDropdown'],
        SDropdownItem: typeof import('./index')['SDropdownItem'],
        SScrollbar: typeof import('./index')['SScrollbar'],
        SCascader: typeof import('./index')['SCascader'],
        SSkeleton: typeof import('./index')['SSkeleton'],
        SSkeletonItem: typeof import('./index')['SSkeletonItem'],
        SBadge: typeof import('./index')['SBadge'],
        STag: typeof import('./index')['STag'],
        STimeline: typeof import('./index')['STimeline'],
        STimelineItem: typeof import('./index')['STimelineItem'],
        SProgress: typeof import('./index')['SProgress'],



    }

    interface ComponentCustomProperties {
        $message: typeof import('sss-ui-plus')['message'],
        $notify: typeof import('sss-ui-plus')['notify'],
        $confirm: typeof import('sss-ui-plus')['confirm'],
    }


}

export {}
