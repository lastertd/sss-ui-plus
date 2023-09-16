# Drawer 抽屉



::: tip

几乎拥有和[Dialog 对话框](/comps/feedback/dialog/)一样的API, 

:::

## 基础用法

通过 `position` 属性设置抽屉的弹出位置

通过 `v-model`绑定一个 `Boolean` 变量, 控制抽屉的展示


<demo
src="./src/basic.vue"
title="在drawer,你可以放任何你想的元素"
/>

## 头部 & 尾部

通过 `show-head` 控制是否展示header

通过 `show-foot` 控制是否展示footer

<demo
src="./src/headfoot.vue"
title="如果你不需要的话"
/>




## Dialog API

### Props

| 属性名             | 说明                                                         | 类型                          | 默认值        |
| ------------------ | ------------------------------------------------------------ | ----------------------------- | ------------- |
| showFoot           | 展示`footer`                                                 | `Boolean`                     | false         |
| showHead           | 展示`header`                                                 | `Boolean`                     | true          |
| showMark           | 展示遮罩                                                     | `Boolean`                     | true          |
| cancelBtnText      | `取消按钮`的文本                                             | `String`                      | 取消          |
| confirmBtnText     | `确认按钮`的文本                                             | `String`                      | 确认          |
| closeOnClickMark   | 通过点击遮罩关闭对话框                                       | `Boolean`                     | true          |
| closeOnPressEscape | 通过按下`ESC`关闭对话框                                      | `Boolean`                     | true          |
| lockScroll         | 锁定浏览器滚动条                                             | `Boolean`                     | true          |
| appendToBody       | 将对话框添加到`body`标签下，在嵌套对话框时，务必设置为true   | `Boolean`                     | false         |
| draggable          | 可以拖拽                                                     | `Boolean`                     | false         |
| title              | 标题                                                         | `String`                      | default title |
| top                | 距离浏览器顶部的距离                                         | `String`                      | 15`vh`        |
| postion            | 抽屉展示的位置                                               | `top` `right` `bottom` `left` | top           |
| btnSize            | 尾部按钮的大小                                               | `small` `normal` `large`      | normal        |
| beforeClose        | 关闭之前的回调，如果设置了这个属性，要手动调用`done()`函数才会关闭对话框 | `(done:() => void) => void `  | ---           |

### Events

| 事件名  | 说明                 | 类型                       |
| ------- | -------------------- | -------------------------- |
| open    | `Dialog`打开的回调   | `() => void`               |
| opened  | 打开之后的回调       | `() => void`               |
| close   | 关闭的回调           | `(trigger:String) => void` |
| closed  | 关闭后的回调         | `() => void`               |
| cancel  | 点击`取消按钮`的回调 | `() => void`               |
| confirm | 点击`确认按钮`的回调 | `() => void`               |