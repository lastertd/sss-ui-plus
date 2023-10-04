# Switch 开关

## 基础用法

使用`v-model`设置开关绑定值。否则开关不会响应点击事件。

<demo
src="./src/basic.vue"
/>

## 开关祈祷中...

使用 `disabled` 、 `loading`阻止开关状态切换。
<demo
src="./src/disabled.vue"
/>


## 不同的类型

使用 `type`指定开关的类型.

<demo
src="./src/type.vue"
/>

## 不同的尺寸

使用 `size`指定开关大小。
<demo
src="./src/size.vue"
/>

## 文字描述

使用 `activeText` 、 `inactiveText` 指定开关的文字描述。

此外你还可以通过 `text-status`指定文字的文字.

::: tip
开关默认没有设置宽度， 因此在状态切换时大小可以会发生变化， 只需手动自动宽度即可。另外，开关的文字描述在超过开关大小时会触发省略。
:::

<demo
src="./src/text.vue"
/>

## 附带图标

你可以设置开关处于两种状态时的图标, 额外的，loading状态的图标也可以自定义

<demo
src="./src/icon.vue"
/>


## 代理切换

有时候在进行开关状态切换时，需要进行一些确认.使用 `before-change`可以达到这样的效果
<demo
src="./src/change.vue"
/>


## Switch API

### Switch Props

| 属性名       | 说明                                                         | 可选值                                                   | 默认值  |
| ------------ | ------------------------------------------------------------ | -------------------------------------------------------- | ------- |
| modelValue   | 开关的绑定值                                                 | `Boolean`                                                | ---     |
| size         | 开关的大小                                                   | `'small' \| 'normal' \| 'large'`                         | normal  |
| type         | 开关的类型                                                   | `'success' \| 'info' \| 'warning' \| 'danger' \| 'cyan'` | ---     |
| textStatus   | 开关的文字描述所处位置                                       | `'isnide' \| 'outside'`                                  | outside |
| inactiveText | 开关的失活状态的文字描述                                     | `String`                                                 | ---     |
| activeText   | 开关的活跃状态的文字描述                                     | `String`                                                 | ---     |
| inactiveIcon | 开关的失活状态的图标                                         | `String`                                                 | ---     |
| activeIcon   | 开关的活跃状态的图标                                         | `String`                                                 | ---     |
| triggerIcon  | 开关的触发器的图标                                           | `String`                                                 | ---     |
| color        | 开关的颜色                                                   | `String`                                                 | ---     |
| disabled     | 是否禁用开关                                                 | `Boolean`                                                | false   |
| loading      | 开关是否处于加载中                                           | `Boolean`                                                | false   |
| beforeChange | 开关状态切换时的代理函数， 若设置此项，需要手动调用done函数完成切换 | `(done: () => void) => void`                             | ---     |



### Switch Events

| 事件名 | 说明                     | 类型                             |
| ------ | ------------------------ | -------------------------------- |
| change | 开关状态切换时触发的事件 | `(status:'off' \| 'on') => void` |




## 源代码

<SRep aim="SWitch"></SRep>

## 贡献者

<SMember></SMember>