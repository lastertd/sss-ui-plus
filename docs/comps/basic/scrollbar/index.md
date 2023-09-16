# Scrollbar 滚动条

## 基础用法

通过 `height` ` width` 设置`scrollbar`的高度和宽度, 不设置将会自适应子元素的宽高 

<demo
src="./src/basic.vue"
title="早就看原生滚动条不顺眼了！（；´д｀）ゞ"
/>

## 横向滚动

通过 `horizontal` 设置显示横向滚动条

<demo
src="./src/horizontal.vue"
/>


## 快速导航

通过 `quickJump` 可以设置是否在点击滚动条时快速导航到对应位置,此功能默认是开启的

<demo
src="./src/quickJump.vue"
title="在滚动区域很长的时候挺好用的(*^_^*)"
/>


## 自动监听

当子元素发生改变、父元素大小发生变化时, 滚动条的位置和大小都会自动计算

<demo
src="./src/add.vue"
title="如果滚动区的大小不会改变, 可以设置noResize优化性能"
/>

## Scroll API

### Props

| 属性名     | 说明                                                         | 可选值    | 默认值 |
| ---------- | ------------------------------------------------------------ | --------- | ------ |
| vertical   | 是否显示垂直滚动条                                           | `Boolean` | true   |
| horizontal | 水平滚动条                                                   | `Boolean` | false  |
| noResize   | 滚动视口大小是否不再改变，当视口大小不会改变时，添加此项可优化性能 | `Boolean` | false  |
| always     | 是否一直显示                                                 | `Boolean` | false  |
| isOutside  | 是否显示在外部，设置此项，滚动条将会显示在视口外部           | `Boolean` | false  |
| quickJump  | 是否在点击滚动条时，快速导航到对应位置                       | `Boolean` | true   |

