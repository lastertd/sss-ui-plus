# Link 链接

文字超链接

::: warning
由于vitepress的默认样式影响，Link组件显示上可能有些问题。
default原本偏蓝色才对😫


:::

## 基础用法

使用 `type` 指定超链接的类型

<demo
src="./src/basic.vue"
title="不同类型的唯一区别就是皮肤颜色"
/>

## 禁用状态

<demo
src="./src/disabled.vue"
title="oh no 似乎不被允许"
/>

## 下划线

使用 `underline` 使超链接`hover`时显示下划线

<demo
src="./src/underline.vue"
title="附带下划线,体验上或许更好？"
/>

## 图标

可以使用 `prefix-icon` 和 `suffix-icon` 属性使超链接具有 `左` `右` 图标

<demo
src="./src/icon.vue"
title="附带图标，跳转目的更明确"
/>

## Link API

### props

| 属性名        | 说明             | 类型                                                      | 默认值     |
|------------|----------------|---------------------------------------------------------|---------|
| href       | 原生href         | `String`                                                | ---     |
| type       | 类型             | `default` `primary` `success` `info` `warning` `danger` | default |
| disabled   | 禁用             | `Boolean`                                               | false   |
| underline  | `hover`时是否有下划线 | `Boolean`                                               | false   |
| prefixIcon | 前缀图标           | `String`                                                | ---     |
| suffixIcon | 后缀图标           | `String`                                                | ---     |
| jumpMethod | 跳转方式           | `push` `replace` `newView`                              | push    |
