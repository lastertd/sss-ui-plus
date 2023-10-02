# Link 链接

文字超链接


## 基础用法

- 使用 `href` 指定Link的类型。
- 使用 `jumpMethod` 指定超链接的跳转方式

<demo
src="./src/basic.vue"
/>

## 不同的类型

使用 `type`指定Link的类型, 但实际上，不同类型的Link功能完全一致，只是颜色上不同。

<demo
src="./src/type.vue"
/>

## 链接祈祷中...

使用 `disabled` 指定链接是否禁用
<demo
src="./src/disabled.vue"
/>

## 附带下划线

链接在具有 `underline`属性时, 鼠标移动到链接上会具有下划线装饰

<demo
src="./src/underline.vue"
/>

## 附带图标

- `prefix-icon` 指定链接的前缀图标
- `suffix-icon` 指定链接的后缀图标

<demo
src="./src/icon.vue"
/>

## Link API

### Link Props

| 属性名     | 说明                          | 类型                                                        | 默认值  |
| ---------- | ----------------------------- | ----------------------------------------------------------- | ------- |
| href       | Link原生href                  | `String`                                                    | ---     |
| jumpMethod | Link的跳转方式                | `'push' \| 'replace' \| 'newView'`                          | push    |
| type       | Link的类型                    | `'primary' \| 'success' \| 'info' \| 'warning' \| 'danger'` | default |
| disabled   | Link是否处于禁用状态          | `Boolean`                                                   | false   |
| underline  | Link在`hover`时是否显示下划线 | `Boolean`                                                   | false   |
| prefixIcon | Link的前缀图标                | `String`                                                    | ---     |
| suffixIcon | Link的后缀图标                | `String`                                                    | ---     |

### Link Slots

| 名称    | 说明   |
| ------- | ------ |
| default | 默认槽 |

## 源代码
<SRep aim="SLink"></SRep>

## 贡献者

<SMember></SMember>