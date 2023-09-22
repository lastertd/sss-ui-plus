import DefaultTheme from 'vitepress/theme';


import "./styles/index.less"

import ui from "sss-ui-plus/es/index"
import "sss-ui-plus/dist/index.css"


import DemoBlock from '@ruabick/vitepress-demo-block';
import '@ruabick/vitepress-demo-block/dist/style.css';

import IconList from "../../comps/basic/icon/src/iconList.vue";
import MyLayout from "../extendTheme/MyLayout.vue";


export default {
    ...DefaultTheme,
    Layout:MyLayout,
    NotFound: () => 'custom 404', // <- this is a Vue 3 functional component
    enhanceApp({app, router, siteData}) {
        app.use(ui)
        app.component('demo', DemoBlock);
        app.component('IconList', IconList);

    }

}