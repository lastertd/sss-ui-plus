# Notify 通知
悬浮于角落, 或许也是一种让人瞩目的方法。

::: tip
和 `message`函数一样，都是基于`MsgBox`开发的, 因此会有许多相似的属性.

相似的某些属性使用可以查看此文档 [Message 消息](/comps/feedback/message/) 

:::


## 基础用法

可以通过 `title` `text` 指定通知的 `标题` 和 `内容`

<demo
src="./src/basic.vue"
title="标题嘛, 别弄太长"
/>

## 不同的状态

可以通过 `type` 指定通知的类型
<demo
src="./src/type.vue"
title="取值有: success 、 info 、 warning 、 danger"
desc="加上了图标"
/>

## 不同的方位

可以通过 `placement` 指定通知出现在哪个角落
<demo
src="./src/position.vue"
title="取值有: top-left 、 top-right 、 bottom-left 、 bottom-right"
desc="老实说，我觉得有右上角就够了~"
/>

## Notify API

### attributes

| 属性名    | 说明                   | 类型                                                | 默认值        |
| --------- | ---------------------- | --------------------------------------------------- | ------------- |
| title     | 通知的标题             | `String`                                            | default title |
| text      | 通知的内容             | `String`                                            | ---           |
| type      | 类型                   | `success` `info` `warning` `danger`                 | ---           |
| placement | 方位                   | `top-right` `bottom-right` `bottom-left` `top-left` | `top-right`   |
| timeout   | 存活时间               | `Number`                                            | 3000`ms`      |
| offset    | 距离上一条消息的偏移量 | `Number`                                            | 10`px`        |
| icon      | 消息的图标             | `String`                                            | ---           |

