# Message 消息

## 基础用法

可以通过 `text` 指定要显示的文本

和浏览器弹窗类型, 从顶部出现、默认存活3秒

<demo
src="./src/basic.vue"
title="美化了原本的浏览器弹窗"
/>

## 不同状态

可以通过 `type` 指定消息的类型

用来显示「成功、提示、警告、错误」类的操作反馈。

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

可以使用 `showClose`在消息后面显示一个 `close` 图标

<demo
src="./src/close.vue"
title="另外, 消息在获取焦点后,是可以通过按下ESC关闭的."
/>

## 偏移量

可以使用 `offset` 指定距离上一条消息的距离

<demo
src="./src/offset.vue"
title="默认是10px"
/>

## Message API

### Message Props

| 属性名           | 说明          | 类型                                     | 默认值      |
|---------------|-------------|----------------------------------------|----------|
| text          | 消息文本        | `String`                               | ---      |
| type          | 类型          | `success`/ `info`/ `warning`/ `danger` | ---      |
| timeout       | 存活时间        | `Number`                               | 3000`ms` |
| showCloseIcon | 是否显示关闭图标    | `Boolean`                              | false    |
| offset        | 距离上一条消息的偏移量 | `Number`                               | 10`px`   |
| icon          | 自定义消息的图标    | `String`                               | ---      |
| color         | 自定义消息的颜色    | `String`                               | ---      |

