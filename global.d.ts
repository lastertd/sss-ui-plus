// GlobalComponents for Volar
declare module '@vue/runtime-core' {
    export interface GlobalComponents {
        SButton: typeof import('sss-ui-plus')['SButton'],
        SInput: typeof import('sss-ui-plus')['SInput'],
        SIcon: typeof import('sss-ui-plus')['SIcon'],
        SLink: typeof import('sss-ui-plus')['SLink'],
        SDialog: typeof import('sss-ui-plus')['SDialog'],
        SDrawer: typeof import('sss-ui-plus')['SDrawer'],
        SRow: typeof import('sss-ui-plus')['SRow'],

    }
    interface ComponentCustomProperties {
        $message: typeof import('sss-ui-plus')['message'],
        $notify: typeof import('sss-ui-plus')['notify'],
        $confirm: typeof import('sss-ui-plus')['confirm'],
    }


}

export {}
