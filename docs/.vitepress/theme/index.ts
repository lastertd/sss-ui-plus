import DefaultTheme from 'vitepress/theme';


import "../../public/styles/global.less"


import "sss-ui-plus/dist/index.css"
import ui from "../../../index"


import DemoBlock from '@ruabick/vitepress-demo-block';
import '@ruabick/vitepress-demo-block/dist/style.css';

import IconList from "../../comps/basic/icon/src/iconList.vue";
import Badge from "@sss-ui-plus/components/SBadge";
import MyLayout from "../extendTheme/MyLayout.vue";


export default {
    ...DefaultTheme,
    Layout:MyLayout,
    NotFound: () => 'custom 404', // <- this is a Vue 3 functional component
    enhanceApp({app, router, siteData}) {
        app.use(ui)
        app.component('demo', DemoBlock);
        app.component('IconList', IconList);
        app.use(Badge)

    }

}