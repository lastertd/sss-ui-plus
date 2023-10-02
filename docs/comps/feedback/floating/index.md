# Floating 浮动

在页面中我们也许经常看见一些: 文本提示框、气泡确认框、下拉框...等定位在某个元素旁的元素。

他们一般由某个位于文档流的 `reference(引用)`
元素来触发并自动选择合适的方位展示出来。被触发展示的元素则被成为`floating（浮动）`元素

::: tip
`Floating`基于[floating ui](https://floating-ui.com/)开发。通过floating ui可以很轻松地实现浮动元素的定位！

:::

## 基础用法

Floating组件分为 引用元素 和 浮动元素 两个部分, 其中:

- 引用元素对应`slot.reference`
- 浮动元素对应`slot.default`

你可以:

- 通过 `trigger` 选择浮动元素的触发方式
- 通过`closeOnCLickBody` `openOnMounted` 额外控制浮动元素的关闭/打开方式

当trigger被设置为unset时，则只能通过Exposes.open来打开浮动元素

<demo
src="./src/basic.vue"
/>

## 浮动元素的位置

使用 `placement` 设置浮动元素相对于引用元素的定位。

<demo
src="./src/dir.vue"
/>

## 内置过渡

使用 `transition` 可以设置浮动元素的出现动画
全部过渡请参考: [内置过渡](/guide/transition/)

::: tip
当然,
如果不满意内置过渡，也可以传入自定义过渡名, [如何定义过渡?](https://cn.vuejs.org/guide/built-ins/transition.html#transition)
:::

<demo
src="./src/transition.vue"
/>

## 偏移 & 箭头

使用`offset`可以设置浮动元素相对于引用元素的偏移量，默认5px

使用 `showArrow`设置是否在浮动元素中添加指向引用元素的箭头

<demo
src="./src/offset.vue"
/>

## reference解耦

使用`reference`属性可以**动态**设置引用元素，适用于需要在已存在结构中为某些元素添加浮动元素的情况

::: warning
slot.reference的优先级高于props.reference，若两者同时设置，引用元素将由slot.reference决定
:::

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

## 自动跟踪

当引用元素位置会变化时, 浮动元素将会自动跟踪它的位置
::: tip
有时候浮动元素可能会跟不上引用元素，这时候可以通过 `quick-track` 开启快速跟踪
:::

<demo
src="./src/draggable.vue"
/>

## Floating API

### Floating Props

| 属性名              | 说明                              | 可选值                                                                                                                                                                  | 默认值    |
|------------------|---------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------|
| trigger          | 浮动元素的出现的触发方式                    | `'hover' \| 'click' \| 'foucs' \| 'clickToOpen' \| 'unset'`                                                                                                          | click  |
| placement        | 浮动元素相对于引用元素的定位                  | `'top' \| 'left' \| 'bottom' \| 'right' \| 'top-start' \| 'left-start' \| 'bottom-start' \| 'right-start' \| 'top-end' \| 'left-end' \| 'bottom-end' \| 'right-end'` | bottom |
| offset           | 浮动元素相对于引用元素的偏移                  | `Number`                                                                                                                                                             | 5`px`  |
| transition       | 浮动元素出现时的过渡                      | [内置过渡](/guide/transition/)                                                                                                                                           | ---    |
| openDelay        | 浮动元素打开延时                        | `Number`                                                                                                                                                             | 0      |
| closeDelay       | 浮动元素关闭延时                        | `Number`                                                                                                                                                             | 0      |
| disabled         | 是否禁用浮动元素                        | `Boolean`                                                                                                                                                            | false  |
| closeOnClickBody | 是否在点击其他元素时关闭                    | `Boolean`                                                                                                                                                            | false  |
| openOnMounted    | 是否在挂载时立即显示                      | `Boolean`                                                                                                                                                            | false  |
| teleported       | 是否瞬移到body元素下                    | `Boolean`                                                                                                                                                            | true   |
| showArrow        | 是否展示箭头                          | `Boolean`                                                                                                                                                            | false  |
| floatingClass    | floating元素默认会嵌套一层div，设置这层div的类名 | `String`                                                                                                                                                             | ---    |
| reference        | 解耦模式下的引用元素                      | `Ref<MaybeElement>`                                                                                                                                                  | ---    |
| quickTrack       | 是否开启快速跟踪，若浮动元素跟不上引用元素的改变开启此项    | `Boolean`                                                                                                                                                            | false  |

### Floating Events

| 事件名    | 说明         | 类型           |
|--------|------------|--------------|
| open   | 浮动元素打开时的回调 | `() => void` |
| opened | 浮动元素打开后的回调 | `() => void` |
| close  | 浮动元素关闭时的回调 | `() => void` |
| closed | 浮动元素关闭后的回调 | `() => void` |

### Floating Slots

| 名称        | 说明   |
|-----------|------|
| reference | 引用元素 |
| default   | 浮动元素 |

### Floating Exposes

| 属性名    | 说明        | 类型           |
|--------|-----------|--------------|
| close  | 用于关闭浮动元素  | `() => void` |
| open   | 用于打开浮动元素  | `() => void` |
| toggle | 前两者自动选择其一 | `() => void` |

## 源代码
<SRep aim="SFloating"></SRep>

## 贡献者

<SMember></SMember>