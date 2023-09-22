# Notify 通知

悬浮于角落, 用于显示重要的消息, 呆在角落也许更加让人留意

::: tip
和 [message消息](/comps/feedback/message/)一样，都是基于`messageBox`开发的, 因此会有许多相似的属性.

相似的某些属性使用可以查看上述文档

:::

## 基础用法

- `title` 指定通知的标题
- `text` 指定通知的文本内容
- `timeout` 指定通知的存活时间

标题需精练,不然会被省略.timeout设置为0则表示通知不会自动关闭

<demo
src="./src/basic.vue"
/>

## 不同的状态

可以通过 `type` 指定通知的类型
<demo
src="./src/type.vue"
title="取值有: success 、 info 、 warning 、 danger"
/>

## 不同的方位

使用 `placement` 指定通知出现的位置, 可出现在[右上角(默认),  右下角,  左上角,  左下角]
<demo
src="./src/position.vue"
desc="也许右上角就足够?"
/>

## Notify API

### Notify Props

| 属性名       | 说明          | 类型                                                     | 默认值           |
|-----------|-------------|--------------------------------------------------------|---------------|
| title     | 通知的标题       | `String`                                               | default title |
| text      | 通知的内容       | `String`                                               | ---           |
| type      | 类型          | `success`/ `info/` `warning`/ `danger`                 | ---           |
| placement | 方位          | `top-right`/ `bottom-right`/ `bottom-left` /`top-left` | `top-right`   |
| timeout   | 存活时间        | `Number`                                               | 3000`ms`      |
| offset    | 距离上一条消息的偏移量 | `Number`                                               | 10`px`        |
| icon      | 自定义消息的图标    | `String`                                               | ---           |
| color     | 自定义消息的颜色    | `String`                                               | ---           |

