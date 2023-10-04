import {defineConfig} from 'vitepress'
import {fileURLToPath, URL} from 'node:url'

import {applyPlugins} from '@ruabick/md-demo-plugins';


export default defineConfig({
    // site-level options
    title: "SSS UI Plus",
    lastUpdated: true,
    themeConfig: {
        siteTitle: "SSS-UI",
        logo: '/favicon.ico',
        outline: [2, 6],
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
                        {text: '设计原则', link: '/guide/design/'},
                        {text: '内置过渡动画', link: '/guide/transition/'},
                    ]
                }
            ],
            '/comps/': [
                {
                    text: '基础组件',
                    items: [
                        {text: 'Button 按钮', link: '/comps/basic/button/'},
                        {text: 'Icon 图标', link: '/comps/basic/icon/'},
                        {text: 'Link 链接', link: '/comps/basic/link/'},
                        {text: 'Scrollbar 滚动条', link: '/comps/basic/scrollbar/'},
                    ]
                },
                {
                    text: '表单组件',
                    items: [
                        {text: 'Input 输入框', link: '/comps/form/input/'},
                        {text: 'Switch 开关', link: '/comps/form/switch/'},

                    ]
                },
                {
                    text: '数据展示组件',
                    items: [
                        {text: 'Badge 徽章', link: '/comps/data/badge/'},
                        {text: 'Progress 进度条', link: '/comps/data/progress/'},
                        {text: 'Tag 标签', link: '/comps/data/tag/'},
                        {text: 'Timeline 时间线', link: '/comps/data/timeline/'},
                        {text: 'Skeleton 骨架屏', link: '/comps/data/skeleton/'},

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
                        {text: 'Floating 浮动', link: '/comps/feedback/floating/'},
                        {text: 'Tooltip 文本提示框', link: '/comps/feedback/tooltip/'},
                        {text: 'Popconfirm 气泡确认框', link: '/comps/feedback/popconfirm/'},
                        {text: 'Dropdown 下拉框', link: '/comps/feedback/dropdown/'},
                    ]
                },
                {
                    text: '其他组件',
                    items: [
                        {text: 'Divider 分割线', link: '/comps/other/divider/'},

                    ]
                }
            ]
        },
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2023-present SSS UI plus'
        }

    },
    markdown: {
        config: (md) => {
            applyPlugins(md);
        }
    },
    vite: {
        plugins: [],
        resolve: {
            alias: [
                {
                    find: /^.*\/VPSidebar\.vue$/,
                    replacement: fileURLToPath(new URL('./extendTheme/sideBar.vue', import.meta.url))
                },
                {
                    find: /^.*\/VPNav\.vue$/,
                    replacement: fileURLToPath(new URL('./extendTheme/navBar.vue', import.meta.url))
                },
            ]
        }
    }

})

