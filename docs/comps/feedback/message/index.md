# Message 消息

美化了浏览器原本的message

## 基础用法

出现在屏幕的正上方, 默认3秒后消失。

<demo
src="./src/basic.vue"
/>

## 不同状态

可以通过 `type` 指定消息的类型，用来显示「成功、提示、警告、错误」类的操作反馈。

<demo
src="./src/type.vue"
title="对应type取值为: success 、 info 、 warning 、 danger"
/>

## 存活时间

使用 `timeout` 设置消息的存活时间

<demo
src="./src/time.vue"
title="当timout设置为0时, 将不会自动关闭"
/>

## 关闭方式

可以使用 `showClose`在消息后面显示一个close图标,点击该图标可手动关闭Message。另外，在Message拥有焦点时，按下ESC也可以关闭Message。

<demo
src="./src/close.vue"
/>

## 偏移量

可以使用 `offset` 指定距离上一条消息的距离,默认距离是10px。

<demo
src="./src/offset.vue"
/>

## 自定义图标

- 使用 `icon`设置Messaged的图标.
- 使用 `color`设置Message的图标颜色.

<demo
src="./src/icon.vue"
/>

## Message API

### Message Props

| 属性名        | 说明                   | 类型                                           | 默认值   |
| ------------- | ---------------------- | ---------------------------------------------- | -------- |
| text          | 消息文本               | `String`                                       | ---      |
| type          | 类型                   | `'success' \| 'info' \| 'warning' \| 'danger'` | ---      |
| timeout       | 存活时间               | `Number`                                       | 3000`ms` |
| showCloseIcon | 是否显示关闭图标       | `Boolean`                                      | false    |
| offset        | 距离上一条消息的偏移量 | `Number`                                       | 10`px`   |
| icon          | 自定义消息的图标       | `String`                                       | ---      |
| color         | 自定义消息的颜色       | `String`                                       | ---      |

## 源代码
<SRep aim="SMessage"></SRep>

## 贡献者

<SMember></SMember>