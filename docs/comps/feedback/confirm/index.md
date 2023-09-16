# Confirm 确认
属于全局弹出框的一种, 用于确认某些操作是否继续执行

::: tip
和 `message`函数一样，都是基于`MsgBox`开发的, 因此会有许多相似的属性.

相似的某些属性使用可以查看此文档 [Message 消息](/comps/feedback/message/)

:::
## 基础用法

可以使用 `text` `title` 指定确认框的文本内容、标题

::: tip

`confirm` 函数将会返回一个`promise`对象, 当一个操作,比如某个回调函数的执行需要用户确认时，

你可以将这个回调函数放在`confirm`函数的`.then`方法中。

:::

<demo
src="./src/basic.vue"
/>

## 不同的状态

可以通过 `type` 指定确认框的类型

<demo
src="./src/type.vue"
title="取值有: success 、 info 、 warning 、 danger"
desc="info、 waring类型也许蛮有用的!"
/>

## 偏移量

可以通过 `top` 属性控制确认框距离顶部的距离

<demo
src="./src/offset.vue"
title="默认是上下居中的"
/>

## 可以拖拽

通过设置 `draggable` 属性控制确认框是否能被拖拽

<demo
src="./src/draggable.vue"
title="由于确认框关闭后会被销毁,因此他的位置不会被保留下来"
/>

## 自定义按钮文本

可以通过 `cancelBtnText` `confirmBtnText` 指定 `取消按钮` `确认按钮` 的文本

<demo
src="./src/btnText.vue"
title="快点！"
/>

## 区分不同的关闭类型

关闭一个确认框有三种办法！分别是: `cancel` `confirm` `close`

<demo
src="./src/closeType.vue"
/>

## Confirm API

### attributes

| 属性名         | 说明             | 类型                                | 默认值        |
| -------------- | ---------------- | ----------------------------------- | ------------- |
| title          | 通知的标题       | `String`                            | default title |
| text           | 通知的内容       | `String`                            | ---           |
| type           | 类型             | `success` `info` `warning` `danger` | ---           |
| top            | 距离顶部的偏移量 | `String`                            | ---           |
| draggable      | 是否可以被拖拽   | `Boolean`                           | false         |
| cancelBtnText  | `取消按钮`文本   | `String`                            | 取消          |
| confirmBtnText | `确认按钮`文本   | `String`                            | 确认          |
| showMark       | 是否展示遮罩层   | `Boolean`                           | true          |
| icon           | 消息的图标       | `String`                            | ---           |

