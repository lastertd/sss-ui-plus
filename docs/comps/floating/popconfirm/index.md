# Popconfirm 气泡确认框

当用于的某些操作需要确认时，比如点击按钮，可以用于代理一次按钮回调，让用于确认。

::: tip
Popconfirm是基于Floating组件 && MsgBox 组件开发的, 因此会有很多相似的API, 具体可参考[Floating 浮动](/comps/floating/floating/)
:::


## 基础用法

<demo
src="./src/basic.vue"
/>

## 自定义弹出框内容

通过 `cancelBtnText` `confirmBtnText` 设置`取消按钮文本` `确认按钮文本`

通过type设置气泡确认框图标, 暂时不支持自定义图标

<demo
src="./src/dir.vue"
/>

## Popconfirm API

### Props

| 属性名           | 说明                                                         | 可选值                                                       | 默认值 |
| ---------------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------ |
| trigger          | 触发浮动元素显示的类型                                       | `hover` `click` `foucs` `clickToOpen` `unset`                | click  |
| placement        | 浮动元素的定位                                               | `top` `left` `bottom` `right` (可添加start,end后缀) 比如`top-start` | bottom |
| transition       | 浮动元素出现/消失过渡                                        | 请参考（）                                                   | fade   |
| openDelay        | 浮动元素打开延时                                             | `Number`                                                     | 0      |
| closeDelay       | 浮动元素关闭延时                                             | `Number`                                                     | 0      |
| disabled         | 是否禁用浮动元素                                             | `Boolean`                                                    | false  |
| offset           | 浮动元素的偏移量                                             | `Number`                                                     | 5      |
| theme            | 浮动元素的颜色主题                                           | `String`                                                     | light  |
| closeOnClickBody | 是否在点击其他元素时关闭                                     | `Boolean`                                                    | false  |
| openOnMounted    | 是否在挂载时立即显示                                         | `Boolean`                                                    | false  |
| teleported       | 是否瞬移到body元素下                                         | `Boolean`                                                    | true   |
| showArrow        | 是否展示箭头                                                 | `Boolean`                                                    | false  |
| expression       | 非解耦模式下reference元素默认会嵌套一层div，控制div的表现形式 | `block` `inline` `inline-block`                              | block  |
| floatingClass    | floating元素默认会嵌套一层div，设置这层div的类名             | `String`                                                     | ---    |
| reference        | 解耦模式下的引用元素                                         | `Ref<MaybeElement>`                                          | ---    |
| quickTrack       | 是否开启快速跟踪，在解耦模式下若浮动元素跟不上引用元素的改变开启此项 | `Boolean`                                                    | false  |
| cancelBtnText    | `取消按钮`的文本                                             | `String`                                                     | 取消   |
| confirmBtnType   | `确认按钮`的文本                                             | `String`                                                     | 确认   |
| type             | 确认框的类型                                                 | `success` `info` `warning` `danger`                          | ---    |

### Emits



| 事件名  | 说明                     | 类型         |
| ------- | ------------------------ | ------------ |
| open    | 浮动元素打开时的回调     | `() => void` |
| opened  | 浮动元素打开后的回调     | `() => void` |
| close   | 浮动元素关闭时的回调     | `() => void` |
| closed  | 浮动元素关闭后的回调     | `() => void` |
| cancel  | 点击`取消按钮`之后的回调 | `() => void` |
| confirm | 点击`确认按钮`之后的回调 | `() => void` |

### Slots

| 槽名    | 说明                     |
| ------- | ------------------------ |
| default | 需要展示气泡确认框的元素 |


