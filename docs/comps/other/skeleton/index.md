# Skeleton 骨架屏

当页面数据未被加载完成时显示, 并不会过分区分骨架屏内部Item的类别，所有骨架屏Item都应该是一个普通的矩形盒子, 通过css样式来改变外观和布局

## 基础用法

`skeletonItem`的默认样式是一个高20px、宽100%的矩形长条

通过`isRound` 设置圆角

通过`isCircle`设置圆形

::: tip 
设置为圆形时, 不应该设置元素的高度， 默认高度始终和宽度相等
:::

<demo
src="./src/basic.vue"
/>

## 扫描线效果

通过 `animated`设置骨架屏的扫描线动画

<demo
src="./src/animate.vue"
/>

## 加载状态

通过`loading`设置骨架屏是否还处于加载中状态， 当`loading`为false时应该显示真实UI

::: tip 
有时候页面渲染太快会导致骨架屏闪动一下便消失， 通过`throttle`属性设置加载完毕后切换的延时.

:::

<demo
src="./src/loading.vue"
/>

## Skeleton API

### Props

| 属性名   | 说明                 | 可选值    | 默认值 |
| -------- | -------------------- | --------- | ------ |
| animated | 是否采用扫描线动画   | `Boolean` | false  |
| loading  | 是否处于加载中       | `Boolean` | true   |
| throttle | 切换到真实UI时的延时 | `Number`  | 0      |

### Slots

| 槽名     | 说明       |
| -------- | ---------- |
| skeleton | 骨架屏元素 |
| default  | 真实UI     |




## SkeletonItem API

### Props

| 属性名   | 说明       | 可选值                          | 默认值    |
| -------- | ---------- | ------------------------------- | --------- |
| type     | 元素的类型 | `triangle` `rectangle`  `image` | rectangle |
| isCircle | 是否是圆形 | `Boolean`                       | false     |
| isRound  | 是否是圆角 | `Boolean`                       | false     |

