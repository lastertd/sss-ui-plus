# Tooltip 文本提示框

一般用在元素hover时展示提示信息

::: tip
Tooltip是基于Floating组件开发的, 因此会有很多相似的API, 具体可参考[Floating 浮动](/comps/floating/floating/)
:::

## 基础用法

tooltip提供12种不同的方位来定位floating元素

<demo
src="./src/basic.vue"
/>

## 主题

通过 `theme` 可以设置提示框的主题,默认为`dark`

<demo
src="./src/theme.vue"
/>

## 通过slot设置提示信息

通过 `content` 槽也可以设置提示信息，此优先级会高于`content`属性

<demo
src="./src/slot.vue"
/>

## Tooltip API

### Props

| 属性名           | 说明                                                         | 可选值                                                       | 默认值  |
| ---------------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------- |
| trigger          | 触发浮动元素显示的类型                                       | `hover` `click` `foucs` `clickToOpen` `unset`                | hover   |
| placement        | 浮动元素的定位                                               | `top` `left` `bottom` `right` (可添加start,end后缀) 比如`top-start` | bottom  |
| transition       | 浮动元素出现/消失过渡                                        | 请参考（）                                                   | fade    |
| openDelay        | 浮动元素打开延时                                             | `Number`                                                     | 50`ms`  |
| closeDelay       | 浮动元素关闭延时                                             | `Number`                                                     | 200`ms` |
| disabled         | 是否禁用浮动元素                                             | `Boolean`                                                    | false   |
| offset           | 浮动元素的偏移量                                             | `Number`                                                     | 10      |
| theme            | 浮动元素的颜色主题                                           | `String`                                                     | dark    |
| closeOnClickBody | 是否在点击其他元素时关闭                                     | `Boolean`                                                    | false   |
| openOnMounted    | 是否在挂载时立即显示                                         | `Boolean`                                                    | false   |
| teleported       | 是否瞬移到body元素下                                         | `Boolean`                                                    | true    |
| showArrow        | 是否显示箭头                                                 | `Boolean`                                                    | true    |
| expression       | 非解耦模式下reference元素默认会嵌套一层div，控制div的表现形式 | `block` `inline` `inline-block`                              | block   |
| floatingClass    | floating元素默认会嵌套一层div，设置这层div的类名             | `String`                                                     | ---     |
| reference        | 解耦模式下的引用元素                                         | `Ref<MaybeElement>`                                          | ---     |
| quickTrack       | 是否开启快速跟踪，在解耦模式下若浮动元素跟不上引用元素的改变开启此项 | `Boolean`                                                    | false   |
| content          | 提示框的文本                                                 | `String`                                                     | ---     |

### Emits

| 事件名 | 说明                 | 类型         |
| ------ | -------------------- | ------------ |
| open   | 浮动元素打开时的回调 | `() => void` |
| opened | 浮动元素打开后的回调 | `() => void` |
| close  | 浮动元素关闭时的回调 | `() => void` |
| closed | 浮动元素关闭后的回调 | `() => void` |

### Slots

| 槽名    | 说明                      |
| ------- | ------------------------- |
| default | 用于Floating的`reference` |
| content | 文本提示信息              |



### Exposes

| 变量名 | 说明               | 类型         |
| ------ | ------------------ | ------------ |
| close  | 用于关闭浮动元素   | `() => void` |
| open   | 用于打开浮动元素   | `() => void` |
| toggle | 前两者自动选择其一 | `() => void` |

