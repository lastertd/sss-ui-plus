import {defineConfig} from 'vitepress'

import {applyPlugins} from '@ruabick/md-demo-plugins';


export default defineConfig({
    // site-level options
    title: "SSS UI Plus",
    lastUpdated: true,
    themeConfig: {
        siteTitle: "SSS-UI",
        logo: 'favicon.ico',
        nav: [
            {text: '指南', link: '/guide/', activeMatch: '/guide'},
            {text: '组件', link: '/comps/basic/button/index', activeMatch: '/comps'},
        ],
        socialLinks: [{icon: "github", link: "https://github.com/lastertd/sss-ui-plus"}],
        algolia: {
            apiKey: '4d3cf385ebfe8e525283c4e2720ed338',
            indexName: 'sssui'
        },
        sidebar: {
            '/guide/': [
                {
                    text: '指南',
                    items: [
                        {text: '安装', link: '/guide/'},
                        {text: '快速开始', link: '/guide/start'},
                    ]
                }
            ],
            '/comps/': [
                {
                    text: '基础组件',
                    items: [
                        {text: 'Icon 图标', link: '/comps/basic/icon/'},
                        {text: 'Button 按钮', link: '/comps/basic/button/'},
                        {text: 'Link 链接', link: '/comps/basic/link/'},
                        {text: 'Scrollbar 滚动条', link: '/comps/basic/scrollbar/'},
                    ]
                },
                {
                    text: '反馈组件',
                    items: [
                        {text: 'Message 消息', link: '/comps/feedback/message/'},
                        {text: 'Notify 通知', link: '/comps/feedback/notify/'},
                        {text: 'Confirm 确认', link: '/comps/feedback/confirm/'},
                        {text: 'Dialog 对话框', link: '/comps/feedback/dialog/'},
                        {text: 'Drawer 抽屉', link: '/comps/feedback/drawer/'},

                    ]
                },
                {
                    text: '浮动组件',
                    items: [
                        {text: 'Floating 浮动', link: '/comps/floating/floating/'},
                        {text: 'Tooltip 文本提示框', link: '/comps/floating/tooltip/'},
                        {text: 'Popconfirm 气泡确认框', link: '/comps/floating/popconfirm/'},
                        {text: 'Dropdown 下拉框', link: '/comps/floating/dropdown/'},

                    ]
                },
                {
                    text: '其他组件',
                    items: [
                        {text: 'Divider 分割线', link: '/comps/other/divider/'},
                        {text: 'Skeleton 骨架屏', link: '/comps/other/skeleton/'},

                    ]
                }
            ]
        },
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2023-present Laster CN'
        }

    },
    markdown: {
        config: (md) => {
            applyPlugins(md);
        }
    },
    vite: {
        plugins: []
    }

})

