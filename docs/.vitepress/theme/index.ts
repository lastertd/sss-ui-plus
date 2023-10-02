import DefaultTheme from 'vitepress/theme';


import "./styles/index.less"

import ui from "sss-ui-plus/es/index"
// import "sss-ui-plus/dist/index.css"

import "../../../packages/styles/global.less"


import * as w from "sss-ui-plus/global"


import DemoBlock from '@ruabick/vitepress-demo-block';
import '@ruabick/vitepress-demo-block/dist/style.css';

import IconList from "../../comps/basic/icon/src/iconList.vue";
import MyLayout from "../extendTheme/MyLayout.vue";
import SMember from "../extendTheme/SMember.vue";
import SRep from "../extendTheme/SRep.vue";


export default {
    ...DefaultTheme,
    Layout:MyLayout,
    NotFound: () => 'custom 404', // <- this is a Vue 3 functional component
    enhanceApp({app, router, siteData}) {
        app.use(ui)
        app.component('demo', DemoBlock);
        app.component('IconList', IconList);
        app.component('SMember', SMember);
        app.component('SRep', SRep);

    }

}