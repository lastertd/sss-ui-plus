# Button 按钮

最最最最常见的按钮

## 基础用法

- 使用 `type`指定按钮的颜色基调。
- 使用 `variant`指定按钮的表现形式。
- 使用 `status` 控制按钮的外观。在button中，该属性控制是否是圆角按钮， 是否是圆形按钮
  <demo
  src="./src/basic.vue"
  title="贴心地为按钮装备了7套皮肤!"
  />

## 按钮祈祷中...

- 使用 `disabled` 指定按钮是否被禁用。
- 使用 `loading`指定按钮是否处于加载中。
  ::: tip
  `disabled` 和 `loading` 都代表着按钮不允许， 但是`loading`会清除按钮的前后缀图标，并附加上loading图标
  :::

<demo
src="./src/disabled.vue"
/>

## 图标按钮
- 使用`prefix-icon` 指定按钮的前缀图标。
- 使用`suffix-icon` 指定按钮的后缀图标。

图标可以赋予按钮更多含义。单独设置icon，可以创造一个纯图标按钮。
<demo
src="./src/icon.vue"
/>

## 不同的尺寸

使用 `size` 指定按钮的大小。

不同的`size`只控制按钮的最大高度, 三种尺寸对应最大高度为: 24px, 32px, 40px。

当button内容超过button宽度时, 默认会换行而撑开button.

<demo
src="./src/size.vue"
/>

## 按钮组

急急急急急.......

## Button API

### Button Props

| 属性名     | 说明           | 类型                                                         | 默认值  |
| ---------- | -------------- | ------------------------------------------------------------ | ------- |
| type       | 按钮的类型     | `'primary' \| 'success' \| 'info' \| 'warning' \| 'danger' \| 'cyan'` | default |
| nativeType | 按钮的原生类型 | `'buton' \| 'sumbit' \| 'reset'`                             | button  |
| size       | 按钮的大小     | ` 'small' \| 'large'`                                        | normal  |
| variant    | 按钮的表现形式 | `'ghost' \| 'fantasy' \| 'empty'`                            | ---     |
| disabled   | 是否禁用按钮   | `Boolean`                                                    | false   |
| loading    | 是否加载中按钮 | `Boolean`                                                    | false   |
| prefixIcon | 按钮的前缀图标 | `String`                                                     | ---     |
| suffixIcon | 按钮的后缀图标 | `String`                                                     | ---     |

### Button Events

| 事件名 | 说明         | 类型                        |
| ------ | ------------ | --------------------------- |
| click  | 按钮点击事件 | `(evt: MouseEvent) => void` |



### Button Slots

| 名称      | 说明  |
|---------|-----|
| default | 默认槽 |

## 源代码
<SRep aim="SButton"></SRep>

## 贡献者

<SMember></SMember>