# Divider 分割线

通常用于隔断元素

## 基础用法

<demo
src="./src/basic.vue"
/>

## 设置文案

有时候在分割线的位置上，需要设置一些文案

通过`text`属性，或者`default`槽设置文案， 若两者同时设置, slot.default优先级高于props.text

通过`placement`设置文本位置, 除了`center` `start` `end` 之外还能设置百分比偏移量

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

### Divider Props

| 属性名        | 说明            | 可选值                                        | 默认值        |
|------------|---------------|--------------------------------------------|------------|
| direction  | 分割线的方向        | `'vertical' \| 'horizontal'`               | horizontal |
| status     | 分割线的类型        | `'dashed' \| 'solid'`                      | solid      |
| placement  | 分割线的文案的位置     | `'start' \| 'center' \| 'end' \|' string'` | center     |
| prefixIcon | 分割线的文案的前缀图标   | `String`                                   | ---        |
| suffixIcon | 分割线的文案的后缀图标   | `String`                                   | ---        |
| text       | 分割线的文案        | `String`                                   | ---        |
| gap        | 分割线用于隔离的高度（宽度） | `Number`                                   | 10         |

### Divider Slots

| 名称      | 说明  |
|---------|-----|
| default | 默认槽 |

## 源代码
<SRep aim="SDivider"></SRep>

## 贡献者

<SMember></SMember>