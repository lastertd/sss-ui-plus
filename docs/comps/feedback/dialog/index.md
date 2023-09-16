# Dialog 对话框

## 基础用法

通过 `v-model`绑定一个 `Boolean` 变量

::: tip
`dialog`目前只支持自定义`body`.

`header` 和 `footer`暂时不能自定义
:::

<demo
src="./src/basic.vue"
title="在dialog中,你可以放任何你想的元素"
/>

## 偏移量

通过 `top` 设置对话框与顶部的距离

<demo
src="./src/top.vue"
title="top设置为unset时，可以实现上下居中"
/>

## 清除遮罩

通过设置 `show-mark` 是否展示遮罩

<demo
src="./src/mark.vue"
/>

## 关闭方式

通过设置 `close-on-click-mark` `close-on-press-escape` 选择对话框是否能通过 `点击遮罩` `按下ESC` 关闭

<demo
src="./src/close.vue"
/>

## 可拖拽

通过 `draggable` 设置对话框是否能被拖拽

<demo
src="./src/draggable.vue"
title="试着拖拽header吧"
/>

## Dialog API

### Props

| 属性名             | 说明                                                         | 类型                         | 默认值        |
| ------------------ | ------------------------------------------------------------ | ---------------------------- | ------------- |
| showFoot           | 展示`footer`                                                 | `Boolean`                    | false         |
| showHead           | 展示`header`                                                 | `Boolean`                    | true          |
| showMark           | 展示遮罩                                                     | `Boolean`                    | true          |
| cancelBtnText      | `取消按钮`的文本                                             | `String`                     | 取消          |
| confirmBtnText     | `确认按钮`的文本                                             | `String`                     | 确认          |
| closeOnClickMark   | 通过点击遮罩关闭对话框                                       | `Boolean`                    | true          |
| closeOnPressEscape | 通过按下`ESC`关闭对话框                                      | `Boolean`                    | true          |
| lockScroll         | 锁定浏览器滚动条                                             | `Boolean`                    | true          |
| appendToBody       | 将对话框添加到`body`标签下，在嵌套对话框时，务必设置为true   | `Boolean`                    | false         |
| draggable          | 可以拖拽                                                     | `Boolean`                    | false         |
| title              | 标题                                                         | `String`                     | default title |
| top                | 距离浏览器顶部的距离                                         | `String`                     | 15`vh`        |
| beforeClose        | 关闭之前的回调，如果设置了这个属性，要手动调用`done()`函数才会关闭对话框 | `(done:() => void) => void ` | ---           |

### Events

| 事件名  | 说明                 | 类型                       |
| ------- | -------------------- | -------------------------- |
| open    | `Dialog`打开的回调   | `() => void`               |
| opened  | 打开之后的回调       | `() => void`               |
| close   | 关闭的回调           | `(trigger:String) => void` |
| closed  | 关闭后的回调         | `() => void`               |
| cancel  | 点击`取消按钮`的回调 | `() => void`               |
| confirm | 点击`确认按钮`的回调 | `() => void`               |

