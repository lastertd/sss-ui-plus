// vite.config.ts
import { defineConfig } from "file:///C:/Users/laster/Desktop/sss-ui-plus-master/node_modules/vite/dist/node/index.js";
import vue from "file:///C:/Users/laster/Desktop/sss-ui-plus-master/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import DefineOptions from "file:///C:/Users/laster/Desktop/sss-ui-plus-master/node_modules/unplugin-vue-define-options/dist/vite.mjs";
import { resolve } from "path";
import dts from "file:///C:/Users/laster/Desktop/sss-ui-plus-master/node_modules/vite-plugin-dts/dist/index.mjs";
import postcss from "file:///C:/Users/laster/Desktop/sss-ui-plus-master/node_modules/rollup-plugin-postcss/dist/index.js";
import autoprefixer from "file:///C:/Users/laster/Desktop/sss-ui-plus-master/node_modules/autoprefixer/lib/autoprefixer.js";
import copy from "file:///C:/Users/laster/Desktop/sss-ui-plus-master/node_modules/rollup-plugin-copy/dist/index.commonjs.js";
import del from "file:///C:/Users/laster/Desktop/sss-ui-plus-master/node_modules/rollup-plugin-delete/dist/index.cjs.js";
var __vite_injected_original_dirname = "C:\\Users\\laster\\Desktop\\sss-ui-plus-master";
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    DefineOptions(),
    dts({
      outDir: ["es", "lib", "dist/@types"],
      tsConfigFilePath: resolve(__vite_injected_original_dirname, "tsconfig.json")
    }),
    postcss({
      extract: "index.css",
      plugins: [autoprefixer()]
    }),
    copy({
      targets: [
        { src: "es/*.css", dest: "dist" },
        { src: "lib/*.css", dest: "dist" }
      ]
    }),
    del({
      targets: [
        // 设置删除规则，删除原来位置的 CSS 文件
        "es/*.css",
        "lib/*.css",
        "dist/style.css"
      ],
      hook: "writeBundle"
      // 在 writeBundle 钩子时执行删除操作
    })
  ],
  build: {
    rollupOptions: {
      external: ["vue", "@vueuse/core", "@floating-ui/vue"],
      input: "./index.ts",
      output: [
        {
          format: "es",
          entryFileNames: "[name].mjs",
          //让打包目录和我们目录对应
          preserveModules: true,
          exports: "named",
          //配置打包根目录
          dir: "es"
        },
        {
          //打包格式
          format: "cjs",
          //打包后文件名
          entryFileNames: "[name].js",
          //让打包目录和我们目录对应
          preserveModules: true,
          exports: "named",
          //配置打包根目录
          dir: "lib"
        }
      ]
    },
    lib: {
      entry: "./index.ts",
      name: "sss-ui-plus",
      fileName: "sss-ui-plus",
      formats: ["es", "umd", "cjs"]
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxsYXN0ZXJcXFxcRGVza3RvcFxcXFxzc3MtdWktcGx1cy1tYXN0ZXJcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXGxhc3RlclxcXFxEZXNrdG9wXFxcXHNzcy11aS1wbHVzLW1hc3RlclxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvbGFzdGVyL0Rlc2t0b3Avc3NzLXVpLXBsdXMtbWFzdGVyL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHtkZWZpbmVDb25maWd9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcbmltcG9ydCBEZWZpbmVPcHRpb25zIGZyb20gJ3VucGx1Z2luLXZ1ZS1kZWZpbmUtb3B0aW9ucy92aXRlJ1xuaW1wb3J0IHtyZXNvbHZlfSBmcm9tIFwicGF0aFwiO1xuaW1wb3J0IGR0cyBmcm9tIFwidml0ZS1wbHVnaW4tZHRzXCI7XG5pbXBvcnQgcG9zdGNzcyBmcm9tICdyb2xsdXAtcGx1Z2luLXBvc3Rjc3MnXG5pbXBvcnQgYXV0b3ByZWZpeGVyIGZyb20gXCJhdXRvcHJlZml4ZXJcIlxuaW1wb3J0IGNvcHkgZnJvbSBcInJvbGx1cC1wbHVnaW4tY29weVwiXG5pbXBvcnQgZGVsIGZyb20gXCJyb2xsdXAtcGx1Z2luLWRlbGV0ZVwiXG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICAgIHBsdWdpbnM6IFtcbiAgICAgICAgdnVlKCksXG4gICAgICAgIERlZmluZU9wdGlvbnMoKSxcbiAgICAgICAgZHRzKHtcbiAgICAgICAgICAgIG91dERpcjogWydlcycsIFwibGliXCIsJ2Rpc3QvQHR5cGVzJ10sXG4gICAgICAgICAgICB0c0NvbmZpZ0ZpbGVQYXRoOiByZXNvbHZlKF9fZGlybmFtZSwgXCJ0c2NvbmZpZy5qc29uXCIpLFxuICAgICAgICB9KSxcbiAgICAgICAgcG9zdGNzcyh7XG4gICAgICAgICAgICBleHRyYWN0OiAnaW5kZXguY3NzJyxcbiAgICAgICAgICAgIHBsdWdpbnM6W2F1dG9wcmVmaXhlcigpXVxuICAgICAgICB9KSxcbiAgICAgICAgY29weSh7XG4gICAgICAgICAgICB0YXJnZXRzOltcbiAgICAgICAgICAgICAgICB7IHNyYzogJ2VzLyouY3NzJywgZGVzdDogJ2Rpc3QnIH0sXG4gICAgICAgICAgICAgICAgeyBzcmM6ICdsaWIvKi5jc3MnLCBkZXN0OiAnZGlzdCcgfVxuICAgICAgICAgICAgXVxuICAgICAgICB9KSxcbiAgICAgICAgZGVsKHtcbiAgICAgICAgICAgIHRhcmdldHM6IFtcbiAgICAgICAgICAgICAgICAvLyBcdThCQkVcdTdGNkVcdTUyMjBcdTk2NjRcdTg5QzRcdTUyMTlcdUZGMENcdTUyMjBcdTk2NjRcdTUzOUZcdTY3NjVcdTRGNERcdTdGNkVcdTc2ODQgQ1NTIFx1NjU4N1x1NEVGNlxuICAgICAgICAgICAgICAgICdlcy8qLmNzcycsXG4gICAgICAgICAgICAgICAgJ2xpYi8qLmNzcycsXG4gICAgICAgICAgICAgICAgJ2Rpc3Qvc3R5bGUuY3NzJyxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBob29rOiAnd3JpdGVCdW5kbGUnLCAvLyBcdTU3Mjggd3JpdGVCdW5kbGUgXHU5NEE5XHU1QjUwXHU2NUY2XHU2MjY3XHU4ODRDXHU1MjIwXHU5NjY0XHU2NENEXHU0RjVDXG4gICAgICAgIH0pLFxuICAgIF0sXG4gICAgYnVpbGQ6IHtcbiAgICAgICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgICAgICAgZXh0ZXJuYWw6IFtcInZ1ZVwiLCAnQHZ1ZXVzZS9jb3JlJywgJ0BmbG9hdGluZy11aS92dWUnXSxcbiAgICAgICAgICAgIGlucHV0OiAnLi9pbmRleC50cycsXG5cbiAgICAgICAgICAgIG91dHB1dDogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0OiBcImVzXCIsXG4gICAgICAgICAgICAgICAgICAgIGVudHJ5RmlsZU5hbWVzOiBcIltuYW1lXS5tanNcIixcbiAgICAgICAgICAgICAgICAgICAgLy9cdThCQTlcdTYyNTNcdTUzMDVcdTc2RUVcdTVGNTVcdTU0OENcdTYyMTFcdTRFRUNcdTc2RUVcdTVGNTVcdTVCRjlcdTVFOTRcbiAgICAgICAgICAgICAgICAgICAgcHJlc2VydmVNb2R1bGVzOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBleHBvcnRzOiBcIm5hbWVkXCIsXG4gICAgICAgICAgICAgICAgICAgIC8vXHU5MTREXHU3RjZFXHU2MjUzXHU1MzA1XHU2ODM5XHU3NkVFXHU1RjU1XG4gICAgICAgICAgICAgICAgICAgIGRpcjogXCJlc1wiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAvL1x1NjI1M1x1NTMwNVx1NjgzQ1x1NUYwRlxuICAgICAgICAgICAgICAgICAgICBmb3JtYXQ6IFwiY2pzXCIsXG4gICAgICAgICAgICAgICAgICAgIC8vXHU2MjUzXHU1MzA1XHU1NDBFXHU2NTg3XHU0RUY2XHU1NDBEXG4gICAgICAgICAgICAgICAgICAgIGVudHJ5RmlsZU5hbWVzOiBcIltuYW1lXS5qc1wiLFxuICAgICAgICAgICAgICAgICAgICAvL1x1OEJBOVx1NjI1M1x1NTMwNVx1NzZFRVx1NUY1NVx1NTQ4Q1x1NjIxMVx1NEVFQ1x1NzZFRVx1NUY1NVx1NUJGOVx1NUU5NFxuICAgICAgICAgICAgICAgICAgICBwcmVzZXJ2ZU1vZHVsZXM6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGV4cG9ydHM6IFwibmFtZWRcIixcbiAgICAgICAgICAgICAgICAgICAgLy9cdTkxNERcdTdGNkVcdTYyNTNcdTUzMDVcdTY4MzlcdTc2RUVcdTVGNTVcbiAgICAgICAgICAgICAgICAgICAgZGlyOiBcImxpYlwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuXG4gICAgICAgIH0sXG4gICAgICAgIGxpYjoge1xuICAgICAgICAgICAgZW50cnk6IFwiLi9pbmRleC50c1wiLFxuICAgICAgICAgICAgbmFtZTogJ3Nzcy11aS1wbHVzJyxcbiAgICAgICAgICAgIGZpbGVOYW1lOiAnc3NzLXVpLXBsdXMnLFxuICAgICAgICAgICAgZm9ybWF0czogW1wiZXNcIiwgXCJ1bWRcIiwgXCJjanNcIl0sXG4gICAgICAgIH1cblxuXG4gICAgfSxcblxuXG59KVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUEwVCxTQUFRLG9CQUFtQjtBQUNyVixPQUFPLFNBQVM7QUFDaEIsT0FBTyxtQkFBbUI7QUFDMUIsU0FBUSxlQUFjO0FBQ3RCLE9BQU8sU0FBUztBQUNoQixPQUFPLGFBQWE7QUFDcEIsT0FBTyxrQkFBa0I7QUFDekIsT0FBTyxVQUFVO0FBQ2pCLE9BQU8sU0FBUztBQVJoQixJQUFNLG1DQUFtQztBQVd6QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUN4QixTQUFTO0FBQUEsSUFDTCxJQUFJO0FBQUEsSUFDSixjQUFjO0FBQUEsSUFDZCxJQUFJO0FBQUEsTUFDQSxRQUFRLENBQUMsTUFBTSxPQUFNLGFBQWE7QUFBQSxNQUNsQyxrQkFBa0IsUUFBUSxrQ0FBVyxlQUFlO0FBQUEsSUFDeEQsQ0FBQztBQUFBLElBQ0QsUUFBUTtBQUFBLE1BQ0osU0FBUztBQUFBLE1BQ1QsU0FBUSxDQUFDLGFBQWEsQ0FBQztBQUFBLElBQzNCLENBQUM7QUFBQSxJQUNELEtBQUs7QUFBQSxNQUNELFNBQVE7QUFBQSxRQUNKLEVBQUUsS0FBSyxZQUFZLE1BQU0sT0FBTztBQUFBLFFBQ2hDLEVBQUUsS0FBSyxhQUFhLE1BQU0sT0FBTztBQUFBLE1BQ3JDO0FBQUEsSUFDSixDQUFDO0FBQUEsSUFDRCxJQUFJO0FBQUEsTUFDQSxTQUFTO0FBQUE7QUFBQSxRQUVMO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNKO0FBQUEsTUFDQSxNQUFNO0FBQUE7QUFBQSxJQUNWLENBQUM7QUFBQSxFQUNMO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDSCxlQUFlO0FBQUEsTUFDWCxVQUFVLENBQUMsT0FBTyxnQkFBZ0Isa0JBQWtCO0FBQUEsTUFDcEQsT0FBTztBQUFBLE1BRVAsUUFBUTtBQUFBLFFBQ0o7QUFBQSxVQUNJLFFBQVE7QUFBQSxVQUNSLGdCQUFnQjtBQUFBO0FBQUEsVUFFaEIsaUJBQWlCO0FBQUEsVUFDakIsU0FBUztBQUFBO0FBQUEsVUFFVCxLQUFLO0FBQUEsUUFDVDtBQUFBLFFBQ0E7QUFBQTtBQUFBLFVBRUksUUFBUTtBQUFBO0FBQUEsVUFFUixnQkFBZ0I7QUFBQTtBQUFBLFVBRWhCLGlCQUFpQjtBQUFBLFVBQ2pCLFNBQVM7QUFBQTtBQUFBLFVBRVQsS0FBSztBQUFBLFFBQ1Q7QUFBQSxNQUNKO0FBQUEsSUFFSjtBQUFBLElBQ0EsS0FBSztBQUFBLE1BQ0QsT0FBTztBQUFBLE1BQ1AsTUFBTTtBQUFBLE1BQ04sVUFBVTtBQUFBLE1BQ1YsU0FBUyxDQUFDLE1BQU0sT0FBTyxLQUFLO0FBQUEsSUFDaEM7QUFBQSxFQUdKO0FBR0osQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
