# Dialog 对话框

在保持当前页面活跃的情况下，相当于创建了一个小窗口

## 基础用法

通过vue的双向绑定语法 `v-model`绑定一个 `Boolean` 变量, 当绑定值为true时显示Dialog.

Dialog分为三个部分:  `header` 、`body` 、`footer`。 你可以通过属性 `noHeader` 、`noBody` 、`noFooter`分别设置
是否需要它们。 当然, 你也可以传入对应slot来替代它们 (body对应默认slot, 其余两者同名)

<demo
src="./src/basic.vue"
title="在dialog中,你可以放任何你想的元素, 适合需要定制性更大的场景"
/>

## 关闭前的回调

使用`beforeClose`属性设置Dialog关闭前的回调。

Dialog隐藏时会触发三类事件大体分为: `close`、 `cancel`、 `confirm`

其中 `cancel`和 `confirm` 只能通过`默认footer`中的 取消按钮 和 确认按钮 触发, 而`close`可以通过按下esc、点击遮罩、点击close图标触发。

::: tip
当需要自定义footer的内容同时保留cancel、confirm事件时,Dialog也提供对应的方法, 具体可以查看Exposes
:::
<demo
src="./src/beforeClose.vue"
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
src="./src/define.vue"
/>

## 局部Dialog

使用 `part`设置Dialog为局部dialog, 需要注意的是, 若是局部Dialog, 不能设置appendToBody,否则会变成全屏Dialog, 且Dialog父元素定位
要设置为非普通定位。

<demo
src="./src/part.vue"
/>

## 偏移量

通过 `top` 设置对话框与顶部的距离, Dialog默认距离容器顶部10vh， 若设置为非法值, Dialog将位于容器正中心。

<demo
src="./src/top.vue"
/>

## 关闭方式

通过设置 `close-on-click-mark` `close-on-press-escape` 选择对话框是否能通过 `点击遮罩` `按下ESC` 关闭

<demo
src="./src/close.vue"
/>

## 可拖拽

通过 `draggable` 设置对话框是否能被拖拽, 试试拖动对话框的头部区域吧！

<demo
src="./src/draggable.vue"
/>

## Dialog API

### Dialog Props

| 属性名             | 说明                                                         | 类型                             | 默认值        |
| ------------------ | ------------------------------------------------------------ | -------------------------------- | ------------- |
| modelValue         | 对话框打开/关闭的绑定值                                      | `Boolean`                        | ---           |
| title              | 对话框消息头的标题                                           | `String`                         | default title |
| showCloseIcon      | 是否显示消息头中的关闭图标                                   | `Boolean`                        | true          |
| cancelBtnText      | 消息尾中取消按钮的文本                                       | `String`                         | ---           |
| confirmBtnText     | 消息尾中确认按钮的文本                                       | `String`                         | ---           |
| btnSize            | 消息尾中按钮的大小                                           | `'small' \| 'normal' \| 'large'` | small         |
| noHeader           | 是否去除消息头                                               | `Boolean`                        | false         |
| noBody             | 是否去除消息体                                               | `Boolean`                        | false         |
| noFooter           | 是否去除消息尾                                               | `Boolean`                        | false         |
| transition         | 对话框的过渡动画                                             | [内置过渡](/guide/transition/)   | ---           |
| draggable          | 对话框是否可以被拖动                                         | `Boolean`                        | false         |
| top                | 对话框距离浏览器视口顶部的距离                               | `String`                         | 20vh          |
| beforeClose        | 对话框关闭事件前的回调函数，若设置此项, 需要手动调用done函数关闭对话框 | `(done: () => void) => void`     | ---           |
| showMark           | 是否显示遮罩                                                 | `Boolean`                        | true          |
| closeOnPressEscape | 是否可以通过按下ESC来关闭对话框                              | `Boolean`                        | true          |
| closeOnClickMark   | 在显示遮罩的情况下, 是否可以通过点击遮罩关闭对话框           | `Boolean`                        | true          |
| lockScroll         | 对话框出现时, 是否禁止浏览器的滚动行为                       | `Boolean`                        | true          |
| appendToBody       | 是否挂载到body元素下面, 在层级混乱时开启此项                 | `Boolean`                        | false         |

### Dialog Events

| 事件名     | 说明                  | 类型                                      |
|---------|---------------------|-----------------------------------------|
| open    | 打开对话框时触发的事件         | `() => void`                            |
| opened  | 打开对话框后触发的事件         | `() => void`                            |
| close   | 关闭对话框时触发的事件         | `(trigger:MessageTriggerTypes) => void` |
| closed  | 关闭对话框后触发的事件         | `() => void`                            |
| cancel  | 取消对话框时触发的事件         | `() => void`                            |
| confirm | 确认对话框时触发的事件         | `() => void`                            |
| hidden  | (关闭，取消，确认)对话框时触发的事件 | `() => void`                            |

### Dialog Exposes

| 名称      | 说明                 | 类型                                     |
|---------|--------------------|----------------------------------------|
| open    | 打开消息框, 会触发open事件   | `() => void`                           |
| close   | 关闭消息框, 会触发close事件  | `(trigger:MessageTriggerTypes) =>void` |
| hidden  | 关闭消息框, 无副作用        | `() => void`                           |
| toggle  | 闭/打开消息框, 无副作用      | `() => void`                           |
| cancel  | 关闭消息框, 触发cancel事件  | `() => void`                           |
| confirm | 关闭消息框, 触发confirm事件 | `() => void`                           |

### Dialog Slots

| 名称      | 说明      |
|---------|---------|
| default | 对话框body |
| header  | 对话框头部   |
| footer  | 对话框尾部   |

## 源代码
<SRep aim="SDialog"></SRep>

## 贡献者

<SMember></SMember>