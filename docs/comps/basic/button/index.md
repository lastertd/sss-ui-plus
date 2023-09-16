# Button 按钮

常见的按钮Ciallo～(∠・ω< )⌒★!

## 基础用法

使用 `type` `empty` `round` 来指定按钮最基本的样式

<demo
src="./src/basic.vue"
title="type取值一共有8种噢 , 1,2,3,4,5,6,7...还一种被藏了起来"
/>

## 禁用状态的按钮

可以使用 `disabled` 属性来决定按钮是否被禁用。

<demo
src="./src/disabled.vue"
title="disabled是一个布尔值，因此你可以触发简写"
/>

## 幽灵按钮

可以使用 `ghost` 属性来决定按钮是否是幽灵按钮
<demo
src="./src/ghost.vue"
title="ghost也可以触发简写"
/>

## 给按钮加上图标

可以使用 `prefix-icon` 和 `suffix-icon` 属性给按钮中的文字 `前` `后` 加上喜欢的图标
<demo
src="./src/icon.vue"
title="当然，如果没有文字的话，他就是一个纯图标按钮了"
/>

## 按钮大小变

可以使用 `size` 属性来指定按钮的按钮的大小
<demo
src="./src/size.vue"
title="取值有 large normal small 三种"
/>

## 按钮组

你先别急...

## Button API

### Button Props

| 属性名        | 说明    | 类型                                                                             | 默认值     |
|------------|-------|--------------------------------------------------------------------------------|---------|
| type       | 类型    | `default` / `primary` / `success`/ `info` /`warning`/ `danger` /`cyan`/ `dark` | default |
| nativeType | 原生类型  | `button`/ `submit` /`reset`                                                    | button  |
| size       | 大小    | `small`/ `normal` /`large`                                                     | normal  |
| round      | 圆角按钮  | `Boolean`                                                                      | false   |
| circle     | 圆形按钮  | `Boolean`                                                                      | false   |
| disabled   | 禁用按钮  | `Boolean`                                                                      | false   |
| empty      | 镂空按钮  | `Boolean`                                                                      | false   |
| ghost      | 幽灵按钮  | `Boolean`                                                                      | false   |
| loading    | 加载中按钮 | `Boolean`                                                                      | false   |
| prefixIcon | 前缀图标  | `String`                                                                       | ---     |
| suffixIcon | 后缀图标  | `String`                                                                       | ---     |

