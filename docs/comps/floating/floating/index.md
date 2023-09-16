# Floating 浮动

在页面中我们也许经常看见一些: 文本提示框、气泡确认框、下拉框...等各种看起来不像是文档流的元素。

他们一般由一个位于文档流的 `reference(引用)`元素 来触发并自动选择合适的方位展示出来。

这样的元素被称为 `floating(浮动)`元素。

::: tip
`Floating`基于[floating ui](https://floating-ui.com/)开发。通过floating ui可以很轻松地实现浮动元素的定位！

:::

## 基础用法

Floating组件分为 `reference` 和 `floating` 两个部分

你可以通过 `trigger` `closeOnCLickBody` `openOnMounted` 来控制`floating`的打开和关闭方式

<demo
src="./src/basic.vue"
/>

## 定位置

通过 `placement` 可以设置`floating`的出现位置

<demo
src="./src/dir.vue"
/>

## 内置过渡

通过 `transition` 可以设置`flaoting`的出现动画

内置的**主要**过渡有: `fade`(默认) `vertical-scroll` `horizontal-scroll` `scale` 

全部过渡请参考: （你先别急）


<demo
src="./src/transition.vue"
title="真实的过渡名都有sss-transition作为前缀, 暂时不兼容自定义过渡"
/>

## 偏移 & 箭头

通过 `offset`可以设置floating元素的偏移量 默认是5

通过 `showArrow`可以设置是否显示箭头

<demo
src="./src/offset.vue"
/>



## reference解耦

有时候在不想破坏已存在的结构时，想要给某个元素添加floating元素，可以试试解耦

通过`reference`属性可以**动态**设置`reference`元素

<demo
src="./src/dec.vue"
/>

## 解耦运用-单例模式

在运用解耦时，可以动态设置`reference`属性来实现一个`flaoting`元素服务于多个`reference`元素.

::: warning
    在此模式下, floating元素可能会从意料之外的地方出现
:::

<demo
src="./src/singleton.vue"
/>

## 解耦运用-自动跟踪

在`reference`元素会动时，通过解耦，可以实现`floating`元素跟踪引用元素的变化
::: tip
有时候浮动元素可能会跟不上引用元素，这时候可以通过 `quick-track` 开启快速跟踪
:::

<demo
src="./src/draggable.vue"
/>

## Floating API

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

### Emits



| 事件名 | 说明                 | 类型         |
| ------ | -------------------- | ------------ |
| open   | 浮动元素打开时的回调 | `() => void` |
| opened | 浮动元素打开后的回调 | `() => void` |
| close  | 浮动元素关闭时的回调 | `() => void` |
| closed | 浮动元素关闭后的回调 | `() => void` |

### Slots

| 槽名      | 说明     |
| --------- | -------- |
| reference | 引用元素 |
| floating  | 浮动元素 |

 

### Exposes

| 变量名 | 说明               | 类型         |
| ------ | ------------------ | ------------ |
| close  | 用于关闭浮动元素   | `() => void` |
| open   | 用于打开浮动元素   | `() => void` |
| toggle | 前两者自动选择其一 | `() => void` |

