# Scrollbar 滚动条

漂亮一点的滚动条

## 基础用法

通过 `height`、 ` width` 设置Scrollbar的高度和宽度, 若不设置将会自适应子元素的宽高。

也可以添加 `native` 属性，表示采用原生滚动条。

<demo
src="./src/basic.vue"
/>

## 横向滚动

当子元素宽度超过Scrollbar宽度时, 就会显示横向滚动条

<demo
src="./src/horizontal.vue"
/>


## 快速导航

通过 `quickJump` 可以设置是否在点击滚动条时快速导航到对应位置,此功能默认是开启的

<demo
src="./src/quickJump.vue"
/>


## 自动监听

当子元素发生改变、父元素大小发生变化时, 滚动条的位置和大小都会自动计算

<demo
src="./src/add.vue"
/>

## Scroll API

### Scroll Props

| 属性名    | 说明                                                         | 可选值    | 默认值 |
| --------- | ------------------------------------------------------------ | --------- | ------ |
| noResize  | Scrollbar大小是否不再改变，当视口大小不会改变时，添加此项可优化性能 | `Boolean` | false  |
| always    | Scrollbar的滑块是否一直显示                                  | `Boolean` | false  |
| isOutside | Scrollbar的滑块是否显示在Scrollbar容器外面                   | `Boolean` | false  |
| quickJump | 在点击滚动条滑道时，是否导航到对应位置                       | `Boolean` | true   |
| native    | 是否使用原生滚动条                                           | `Boolean` | false  |

### Scroll Events

| 事件名 | 说明                             | 类型                                            |
| ------ | -------------------------------- | ----------------------------------------------- |
| scroll | 当触发滚动事件时，返回滚动的距离 | `(scrollLeft:number, scrollTop:number) => void` |



### Scroll Slots

| 名称    | 说明   |
| ------- | ------ |
| default | 默认槽 |

## 源代码
<SRep aim="SScrollbar"></SRep>

## 贡献者

<SMember></SMember>