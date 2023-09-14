import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import DefineOptions from 'unplugin-vue-define-options/vite'
import {resolve} from "path";
import dts from "vite-plugin-dts";
import postcss from 'rollup-plugin-postcss'
import autoprefixer from "autoprefixer"
import copy from "rollup-plugin-copy"
import del from "rollup-plugin-delete"
import {terser} from "rollup-plugin-terser";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [

        vue(),
        DefineOptions(),
        // dts({
        //     outDir: ['es', "lib"],
        //     tsConfigFilePath: resolve(__dirname, "tsconfig.json"),
        // }),
        // postcss({
        //     extract: 'index.css',
        //     plugins: [autoprefixer()],
        //
        // }),
        //
        // terser({
        //     format: {
        //         comments: 'all', // 保留至少包含 "@license" 或 "@preserve" 的注释
        //     },
        // }),
        // copy({
        //     targets: [
        //         {src: 'es/*.css', dest: 'dist'},
        //     ],
        //     verbose: true,
        //     hook: 'generateBundle'
        //
        // }),
        // del({
        //     targets: [
        //         // 设置删除规则，删除原来位置的 CSS 文件
        //         'es/*.css',
        //         'lib/*.css',
        //         'dist/style.css',
        //     ],
        //     hook: 'closeBundle', // 在 writeBundle 钩子时执行删除操作
        // }),
    ],


    build: {

        rollupOptions: {

            external: ["vue", '@vueuse/core', '@floating-ui/vue', '@floating-ui/vue'],
            input: './index.ts',

            output: [
                {

                    format: "es",
                    entryFileNames: "[name].mjs",
                    //让打包目录和我们目录对应
                    preserveModules: true,
                    //配置打包根目录
                    dir: "es",
                },
                {
                    //打包格式
                    format: "cjs",
                    //打包后文件名
                    entryFileNames: "[name].js",
                    //让打包目录和我们目录对应
                    preserveModules: true,
                    //配置打包根目录
                    dir: "lib",
                },
            ],

        },
        lib: {

            entry: "./index.ts",
            name: 'sss-ui-plus',
            fileName: 'sss-ui-plus',
            formats: ["es", "umd", "cjs"],

        }


    },


})
