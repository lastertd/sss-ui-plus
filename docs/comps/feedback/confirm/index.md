# Confirm 确认

属于全局弹出框的一种, 在即将执行的主要操作之前, 让用户确认一次

::: tip
和 [Message 消息](/comps/feedback/message/)一样，都是基于`messageBox`开发的, 因此会有许多相似的属性.

相似的某些属性使用可以查看上述文档

:::

## 基础用法

- `title` 指定确认框的标题
- `text`指定确认框的文本内容

::: tip

`confirm`将会返回一个`promise`对象, 在`then`方法中你可以拿到用户的操作结果

:::

<demo
src="./src/basic.vue"
/>

## 不同的状态

使用 `type` 指定确认框的类型, 可取值为[success 、 info 、 warning 、 danger]

<demo
src="./src/type.vue"
/>

## 偏移量

可以通过 `top` 属性控制确认框距离顶部的距离

<demo
src="./src/offset.vue"
title="默认处于视口正中心"
/>

## 自定义按钮文本

可以通过 `cancelBtnText` `confirmBtnText` 指定 `取消按钮` `确认按钮` 的文本

<demo
src="./src/btnText.vue"
title="↑↑↑快点它↑↑↑"
/>

## 区分不同的关闭类型

有许多途径可以关闭确认框, 大体分为: `close`、 `cancel`、 `confirm`

其中 `cancel`和 `confirm` 只能通过`取消按钮` 和 `确认按钮`触发, 而`close`可以通过按下esc、点击遮罩、点击close图标触发。

只有在点击`confirm`是才会走成功的回调, 其余的都会走失败的回调

<demo
src="./src/closeType.vue"
/>

## Confirm API

### Confirm Props

| 属性名            | 说明       | 类型                                     | 默认值           |
|----------------|----------|----------------------------------------|---------------|
| title          | 通知的标题    | `String`                               | default title |
| text           | 通知的内容    | `String`                               | ---           |
| type           | 类型       | `success`/ `info`/ `warning` /`danger` | ---           |
| top            | 距离顶部的偏移量 | `String`                               | ---           |
| draggable      | 是否可以被拖拽  | `Boolean`                              | false         |
| cancelBtnText  | `取消按钮`文本 | `String`                               | 取消            |
| confirmBtnText | `确认按钮`文本 | `String`                               | 确认            |
| showMark       | 是否展示遮罩层  | `Boolean`                              | true          |
| icon           | 自定义消息的图标 | `String`                               | ---           |
| color          | 自定义图标的颜色 | `String`                               | ---           |

