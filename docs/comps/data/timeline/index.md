# Timeline 时间线

回首过往


## 基础用法

使用 `time` 指定事件的时间戳。时间戳默认在事件的下方, 你可以使用 `placement`控制它相对于事件的位置,当前仅支持调整在事件上方,
未来可能新增更多可选值。

<demo
src="./src/basic.vue"
/>


## 不同的状态

使用 `type`可以设置子项的状态。该选项相当于同时设置了`icon`、`color`属性

<demo
src="./src/type.vue"
/>

## 表现形式

使用 `variant`可以设置子项的表现形式, 现仅支持empty选项。
<demo
src="./src/variant.vue"
/>


## 自定义图标&颜色

当不满意type提供的方案时， 你也可以自定义图标和颜色

<demo
src="./src/define.vue"
/>




## 排列方向

使用 `direction`指定时间线的排列方向

<demo
src="./src/dir.vue"
/>


## 不同的尺寸

使用 `size`调整时间线的大小

<demo
src="./src/size.vue"
/>

## Timeline API

### TimeLine Props

| 属性名    | 说明             | 可选值                           | 默认值   |
| --------- | ---------------- | -------------------------------- | -------- |
| direction | 时间线的排列方向 | `'horizontal \| 'vertical'`      | vertical |
| size      | 时间线的大小     | `'small' \| 'normal' \| 'large'` | normal   |

### Timeline Slots

| 名称    | 说明   |
| ------- | ------ |
| default | 默认槽 |



## TimelineItem API



### TimelineItem Props

| 属性名    | 说明                   | 可选值                                                      | 默认值       |
| --------- | ---------------------- | ----------------------------------------------------------- | ------------ |
| type      | 时间线子项的类型       | `'default' \| 'success' \| 'info' \| 'warning' \| 'danger'` | default      |
| time      | 时间线子项的时间戳     | `String`                                                    | Unknown time |
| placement | 时间线子项时间戳的位置 | `'start' \| 'end'`                                          | start        |
| icon      | 时间线子项的图标       | `String`                                                    | ---          |
| color     | 时间线子项的颜色       | `String`                                                    | ---          |
| variant   | 时间线子项的表现形式   | `'empty'`                                                   | ---          |

### TimelineItem Slots

| 名称    | 说明   |
| ------- | ------ |
| default | 默认槽 |


## 源代码
<SRep aim="STimeline"></SRep>

## 贡献者

<SMember></SMember>