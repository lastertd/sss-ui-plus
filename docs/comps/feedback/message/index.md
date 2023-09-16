# Message 消息

## 基础用法


可以通过 `text` 指定要显示的文本

<demo
src="./src/basic.vue"
title="只是显示文本的话，也够用？"
/>


## 不同状态

可以通过 `type` 指定消息的类型

<demo
src="./src/type.vue"
title="取值类型有: success 、 info 、 warning 、 danger"
desc="加上了背景颜色、图标"
/>

## 存活时间

使用 `timeout` 设置消息的存活时间

<demo
src="./src/time.vue"
title="设置为0可以让消息不会自动关闭, 默认存在3秒"
/>

## 关闭方式

可以使用 `showClose`在消息后面显示一个 `close` 图标

<demo
src="./src/close.vue"
title="另外！消息在获取焦点后,是可以通过按下ESC关闭的."
desc="上一段有触发到不会自动关闭的消息么👀？"
/>

## 偏移量

可以使用 `offset` 指定距离上一条消息的距离

<demo
src="./src/offset.vue"
title="默认是10px"
/>

## Message API

### attributes

| 属性名    | 说明                   | 类型                                | 默认值   |
| --------- | ---------------------- | ----------------------------------- | -------- |
| text      | 消息文本               | `String`                            | ---      |
| type      | 类型                   | `success` `info` `warning` `danger` | ---      |
| timeout   | 存活时间               | `Number`                            | 3000`ms` |
| showClose | 是否展示`close`图标    | `Boolean`                           | false    |
| offset    | 距离上一条消息的偏移量 | `Number`                            | 10`px`   |
| icon      | 消息的图标             | `String`                            | ---      |

