# Divider 分割线

通常用于隔断元素

## 基础用法

<demo
src="./src/basic.vue"
/>

## 设置文案

有时候在分割线的位置上，需要设置一些文案

通过`content`属性，或者`default`槽设置文案

通过`contentPostion`设置文本位置, 除了`center` `start` `end` 之外还能设置百分比偏移量

<demo
src="./src/content.vue"
/>

## 类型

可以设置分割线为实线或者虚线

<demo
src="./src/type.vue"
/>

## 垂直分割线

通过`direction`设置分割线的方向

<demo
src="./src/vertical.vue"
/>

## Divider API

### Props

| 属性名          | 说明                         | 可选值                          | 默认值     |
| --------------- | ---------------------------- | ------------------------------- | ---------- |
| direction       | 分割线的方向                 | `vertical` `horizontal`         | horizontal |
| type            | 分割线的类型                 | `dashed` `solid`                | solid      |
| contentPosition | 分割线的文案的位置           | `start` `center` `end` `String` | center     |
| prefixIcon      | 分割线的文案的前缀图标       | `String`                        | ---        |
| suffixIcon      | 分割线的文案的后缀图标       | `String`                        | ---        |
| content         | 分割线的文案                 | `String`                        | ---        |
| gap             | 分割线用于隔离的高度（宽度） | `Number`                        | 10         |

