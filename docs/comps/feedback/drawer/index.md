# Drawer 抽屉

是的, Drawer几乎和[Dialog 对话框](/comps/feedback/dialog/)一模一样！他们都拓展自messageBox组件, 和Dialog只有视觉上的差异。
当需要渲染一些很长的文档或者表单时, Drawer或许更加合适。

## 基础用法

使用 `position` 可以指定Drawer的弹出位置: [`left`、 `top`、 `right`、 `bottom`]

使用 `v-model`绑定一个 `Boolean` 变量, 当绑定值为true时会呼出Drawer。默认Drawer占据30%容器 宽度/高度，请通过自定义类来控制默认样式。

<demo
src="./src/basic.vue"
/>

## 局部Drawer

使用 part设置Drawer为局部Drawer。

<demo
src="./src/part.vue"
/>

## 自定义header、footer

如果不满意header、footer的内容，则可以通过:

- `title`: 设置对话框的标题
- `showCloseIcon`: 设置对话框是否显示关闭图标
- `cancelBtnText`: 设置对话框尾部的取消按钮文本内容
- `confirmBtnText`: 设置对话框尾部的确认按钮文本内容
- `btnSize`: 设置对话框尾部的按钮的大小

如果不满意它们的布局, 那也可以通过传入对应slot覆盖它们

<demo
src="./src/headfoot.vue"
/>

::: tip
更多API介绍请前往[Dialog](/comps/feedback/dialog/), 也可以对照下方API自己尝试🥳
:::

## Drawer API

### Drawer Props

| 属性名             | 说明                                                         | 类型                                     | 默认值        |
| ------------------ | ------------------------------------------------------------ | ---------------------------------------- | ------------- |
| modelValue         | 抽屉打开/关闭的绑定值                                        | `Boolean`                                | ---           |
| position           | 抽屉的弹出方位                                               | `'top' \| 'left' \| 'bottom' \| 'right'` | top           |
| title              | 抽屉消息头的标题                                             | `String`                                 | default title |
| showCloseIcon      | 是否显示消息头中的关闭图标                                   | `Boolean`                                | true          |
| cancelBtnText      | 消息尾中取消按钮的文本                                       | `String`                                 | ---           |
| confirmBtnText     | 消息尾中确认按钮的文本                                       | `String`                                 | ---           |
| btnSize            | 消息尾中按钮的大小                                           | `'small' \| 'normal' \| 'large'`         | small         |
| noHeader           | 是否去除消息头                                               | `Boolean`                                | false         |
| noBody             | 是否去除消息体                                               | `Boolean`                                | false         |
| noFooter           | 是否去除消息尾                                               | `Boolean`                                | false         |
| transition         | 抽屉的过渡动画                                               | [内置过渡](/guide/transition/)           | ---           |
| beforeClose        | 抽屉关闭事件前的回调函数，若设置此项, 需要手动调用done函数关闭对话框 | `(done: () => void) => void`             | ---           |
| showMark           | 是否显示遮罩                                                 | `Boolean`                                | true          |
| closeOnPressEscape | 是否可以通过按下ESC来关闭抽屉                                | `Boolean`                                | true          |
| closeOnClickMark   | 在显示遮罩的情况下, 是否可以通过点击遮罩关闭抽屉             | `Boolean`                                | true          |
| lockScroll         | 抽屉出现时, 是否禁止浏览器的滚动行为                         | `Boolean`                                | true          |
| appendToBody       | 是否挂载到body元素下面, 在层级混乱时开启此项                 | `Boolean`                                | false         |

### Drawer Events

| 事件名  | 说明                               | 类型                                    |
| ------- | ---------------------------------- | --------------------------------------- |
| open    | 打开抽屉时触发的事件               | `() => void`                            |
| opened  | 打开抽屉后触发的事件               | `() => void`                            |
| close   | 关闭抽屉时触发的事件               | `(trigger:MessageTriggerTypes) => void` |
| closed  | 关闭抽屉后触发的事件               | `() => void`                            |
| cancel  | 取消抽屉时触发的事件               | `() => void`                            |
| confirm | 确认抽屉时触发的事件               | `() => void`                            |
| hidden  | (关闭，取消，确认)抽屉时触发的事件 | `() => void`                            |

### Drawer Exposes

| 名称    | 说明                      | 类型                                   |
| ------- | ------------------------- | -------------------------------------- |
| open    | 打开抽屉, 会触发open事件  | `() => void`                           |
| close   | 关闭抽屉, 会触发close事件 | `(trigger:MessageTriggerTypes) =>void` |
| hidden  | 关闭抽屉, 无副作用        | `() => void`                           |
| toggle  | 闭/打开抽屉, 无副作用     | `() => void`                           |
| cancel  | 关闭抽屉, 触发cancel事件  | `() => void`                           |
| confirm | 关闭抽屉, 触发confirm事件 | `() => void`                           |



### Drawer Slots

| 名称    | 说明     |
| ------- | -------- |
| default | 抽屉body |
| header  | 抽屉头部 |
| footer  | 抽屉尾部 |

## 源代码
<SRep aim="SDarwer"></SRep>

## 贡献者

<SMember></SMember>