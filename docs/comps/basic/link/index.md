# Link 链接

文字超链接

::: warning
由于vitepress的默认样式影响，Link组件显示上可能有些问题。
default原本偏蓝而不是紫色


:::

## 基础用法

使用 `type` 指定超链接的类型

<demo
src="./src/basic.vue"
title="类型的唯一区别就是颜色不同"
/>

## 禁用状态

使用 `disabled` 指定链接的禁用状态
<demo
src="./src/disabled.vue"
/>

## 下划线

链接在具有 `underline`时, 鼠标移动到链接上会具有下划线装饰

<demo
src="./src/underline.vue"
/>

## 图标链接

- `prefix-icon` 指定链接的前缀图标
- `suffix-icon` 指定链接的后缀图标

<demo
src="./src/icon.vue"
/>

## Link API

### Link Props

| 属性名     | 说明                    | 类型                                                         | 默认值  |
| ---------- | ----------------------- | ------------------------------------------------------------ | ------- |
| href       | 原生href                | `String`                                                     | ---     |
| type       | 链接的类型              | `default`   /    `primary`/ `success`/ `info`/ `warning`/ `danger` | default |
| disabled   | 是否禁用链接            | `Boolean`                                                    | false   |
| underline  | 在`hover`时是否有下划线 | `Boolean`                                                    | false   |
| prefixIcon | 链接的前缀图标          | `String`                                                     | ---     |
| suffixIcon | 链接的后缀图标          | `String`                                                     | ---     |
| jumpMethod | 触发链接后的跳转方式    | `push`/ `replace`/ `newView`                                 | push    |

### Link Slots

| 名称    | 说明   |
| ------- | ------ |
| default | 默认槽 |

