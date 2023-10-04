# Tag 标签

常用于标记。

## 基础用法

使用 `type`指定标签类型.

使用 `variant`指定标签表现形式.

使用 `status`控制标签外观， 在tag中，该选项仅有 round 可选

<demo
src="./src/basic.vue"
/>

## 不同的尺寸

使用 `size`控制标签的大小, 可选值为[small, normal, large], 默认大小为normal

<demo
src="./src/size.vue"
/>

## 可移除标签

使用 `closable`指定标签可以被删除

<demo
src="./src/closable.vue"
/>

## Tag API

### Tag Props

| 属性名   | 说明             | 可选值                                                      | 默认值  |
| -------- | ---------------- | ----------------------------------------------------------- | ------- |
| type     | 标签的类型       | `'primary' \| 'success' \| 'info' \| 'warning' \| 'danger ` | default |
| size     | 标签的大小       | `'small' \| 'normal' \| 'large'`                            | normal  |
| variant  | 标签的表现形式   | `'light' \| 'dark'`                                         | ---     |
| status   | 标签的外观状态   | `'round'`                                                   | ---     |
| closable | 标签是否可被删除 | `Bolean`                                                    | false   |

### Tag Events

| 事件名 | 说明                                        | 类型                         |
| ------ | ------------------------------------------- | ---------------------------- |
| click  | 点击标签时触发的事件                        | `(event:MouseEvent) => void` |
| close  | 当标签可被删除时， 点击删除图标时触发的事件 | `(event:MouseEvent) => void` |



### Tag Slots 

| 名称    | 说明   |
| ------- | ------ |
| default | 默认槽 |




## 源代码
<SRep aim="STag"></SRep>

## 贡献者

<SMember></SMember>