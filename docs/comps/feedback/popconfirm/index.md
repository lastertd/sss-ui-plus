# Popconfirm 气泡确认框

作用类似于[Confirm 确认](/comps/feedback/confirm/), 最大的区别在于触发的方式不相同。 Confirm属于函数式触发，
而Popconfirm属于组件触发。
在表现上，Popconfirm更加优雅！

::: tip
仅介绍部分用法。

Tooltip是基于Floating组件开发的, 几乎继承了其全部**Props**, 具体可参考[Floating 浮动](/comps/feedback/floating/).
:::

## 基础用法

通过`cancel` `confirm`事件处理用户的取消和确认操作

<demo
src="./src/basic.vue"
/>

## 自定义弹出框内容

- `cancelBtnText` 设置气泡确认框`取消按钮文本`
- `confirmBtnText` 设置气泡确认框`确认按钮文本`
- `type` 设置气泡确认框类型(自动选择图标&图标颜色)
- `icon`自定义气泡确认框图标
- `iconColor`自定义气泡确认框图标颜色
  <demo
  src="./src/dir.vue"
  />

## Popconfirm API

### Popconfirm Props

| 属性名              | 说明                            | 可选值                                                                                                                                                                  | 默认值    |
|------------------|-------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------|
| trigger          | 气泡确认框的触发方式                    | `'hover' \| 'click' \| 'foucs' \| 'clickToOpen' \| 'unset'`                                                                                                          | click  |
| placement        | 气泡确认框相当于引用元素的定位               | `'top' \| 'left' \| 'bottom' \| 'right' \| 'top-start' \| 'left-start' \| 'bottom-start' \| 'right-start' \| 'top-end' \| 'left-end' \| 'bottom-end' \| 'right-end'` | bottom |
| transition       | 气泡确认框出现/消失过渡                  | `String`                                                                                                                                                             | fade   |
| openDelay        | 气泡确认框打开延时                     | `Number`                                                                                                                                                             | 0      |
| closeDelay       | 气泡确认框关闭延时                     | `Number`                                                                                                                                                             | 0      |
| disabled         | 是否禁用气泡确认框                     | `Boolean`                                                                                                                                                            | false  |
| offset           | 气泡确认框的偏移量                     | `Number`                                                                                                                                                             | 5      |
| closeOnClickBody | 是否在点击其他元素时关闭                  | `Boolean`                                                                                                                                                            | false  |
| openOnMounted    | 是否在挂载时立即显示                    | `Boolean`                                                                                                                                                            | false  |
| teleported       | 是否瞬移到body元素下                  | `Boolean`                                                                                                                                                            | true   |
| showArrow        | 是否展示箭头                        | `Boolean`                                                                                                                                                            | false  |
| floatingClass    | 气泡确认框默认会嵌套一层div，设置这层div的类名    | `String`                                                                                                                                                             | ---    |
| reference        | 解耦模式下的引用元素                    | `Ref<MaybeElement>`                                                                                                                                                  | ---    |
| quickTrack       | 是否开启快速跟踪，若气泡确认框跟不上引用元素的改变开启此项 | `Boolean`                                                                                                                                                            | false  |
| cancelBtnText    | `取消按钮`的文本                     | `String`                                                                                                                                                             | 取消     |
| confirmBtnType   | `确认按钮`的文本                     | `String`                                                                                                                                                             | 确认     |
| type             | 确认框的类型                        | `'success' \| 'info' \| 'warning' \| 'danger'`                                                                                                                       | ---    |
| icon             | 自定义气泡确认框图标                    | `String`                                                                                                                                                             | ---    |
| iconColor        | 自定义图标颜色                       | `String`                                                                                                                                                             | ---    |

### Popconfirm  Events

| 事件名     | 说明            | 类型           |
|---------|---------------|--------------|
| open    | 气泡确认框打开时的回调   | `() => void` |
| opened  | 气泡确认框打开后的回调   | `() => void` |
| close   | 气泡确认框关闭时的回调   | `() => void` |
| closed  | 气泡确认框关闭后的回调   | `() => void` |
| cancel  | 点击`取消按钮`之后的回调 | `() => void` |
| confirm | 点击`确认按钮`之后的回调 | `() => void` |

### Popconfirm Slots

| 名称      | 说明              |
|---------|-----------------|
| default | 用作Floating的引用元素 |

## 源代码
<SRep aim="SPopconfirm"></SRep>

## 贡献者

<SMember></SMember>