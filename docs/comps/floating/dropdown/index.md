# Dropdown 下拉框

将数据放入到下拉框。


::: tip
Popconfirm是基于Floating组件组件开发, 因此会有很多相似的API, 具体可参考[Floating 浮动](/comps/floating/floating/)
:::




## 基础用法

`Dropdown`组件中可以放入`DropdownItem`组件

`DropdownItem`通过`tag`设置类型, 设置为`s-link`时,具有和[Link 链接](/comps/basic/link/)类似的API


<demo
src="./src/basic.vue"
/>

## 设置其他子元素

在`Dropdown`内部不仅仅可以放`DropdownItem`元素, 合理设置子元素可以让下拉框更加漂亮


<demo
src="./src/other.vue"
/>

## 可滚动

通过`style` 可以设置下拉框的宽高样式, 当下拉框内部元素超过大小时会自动显示滚动条

也即是下拉框内部有`Scrollbar`组件的功能


<demo
src="./src/scroll.vue"
/>

## item居中

通过 `center`可以设置`DropdownItem`文字居中

<demo
src="./src/center.vue"
/>

## Dropdown API

### Props

| 属性名              | 说明                                                         | 可选值                                                       | 默认值          |
| ------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ | --------------- |
| trigger             | 触发浮动元素显示的类型                                       | `hover` `click` `foucs` `clickToOpen` `unset`                | click           |
| placement           | 浮动元素的定位                                               | `top` `left` `bottom` `right` (可添加start,end后缀) 比如`top-start` | bottom          |
| transition          | 浮动元素出现/消失过渡                                        | 请参考（）                                                   | vertical-scroll |
| openDelay           | 浮动元素打开延时                                             | `Number`                                                     | 0               |
| closeDelay          | 浮动元素关闭延时                                             | `Number`                                                     | 0               |
| disabled            | 是否禁用浮动元素                                             | `Boolean`                                                    | false           |
| offset              | 浮动元素的偏移量                                             | `Number`                                                     | 5               |
| theme               | 浮动元素的颜色主题                                           | `String`                                                     | light           |
| closeOnClickBody    | 是否在点击其他元素时关闭                                     | `Boolean`                                                    | false           |
| openOnMounted       | 是否在挂载时立即显示                                         | `Boolean`                                                    | false           |
| teleported          | 是否瞬移到body元素下                                         | `Boolean`                                                    | true            |
| showArrow           | 是否展示箭头                                                 | `Boolean`                                                    | true            |
| expression          | 非解耦模式下reference元素默认会嵌套一层div，控制div的表现形式 | `block` `inline` `inline-block`                              | block           |
| floatingClass       | floating元素默认会嵌套一层div，设置这层div的类名             | `String`                                                     | ---             |
| reference           | 解耦模式下的引用元素                                         | `Ref<MaybeElement>`                                          | ---             |
| quickTrack          | 是否开启快速跟踪，在解耦模式下若浮动元素跟不上引用元素的改变开启此项 | `Boolean`                                                    | false           |
| scrollbarVertical   | 出现滚动条时，是否显示垂直滚动条                             | `Boolean`                                                    | true            |
| scrollbarHorizontal | 出现滚动条时，是否显示水平滚动条                             | `Boolean`                                                    | false           |
| scrollbarNoResize   | 出现滚动条时，可滚动视口大小是否不再改变                     | `Boolean`                                                    | false           |
| scrollbarAlways     | 出现滚动条时，滚动条是否一直显示                             | `Boolean`                                                    | false           |
| scrollbarIsOutside  | 出现滚动条时，滚动条是否显示在视口外面，一般在视口没有内边距时设置 | `Boolean`                                                    | false           |
| scrollbarQuickJump  | 出现滚动条时，是否开启快速导航                               | `Boolean`                                                    | false           |
| center              | `DropdownItem`是否居中                                       | `Boolean`                                                    | false           |
| closeOnClickItem    | 是否在点击`DropdownItem`时关闭下拉框                         | `Boolean`                                                    | true            |
| prefix              | 用作`select`的第二参数                                       | `String[]`                                                   | ---             |

### Emits



| 事件名 | 说明                         | 类型                                   |
| ------ | ---------------------------- | -------------------------------------- |
| open   | 浮动元素打开时的回调         | `() => void`                           |
| opened | 浮动元素打开后的回调         | `() => void`                           |
| close  | 浮动元素关闭时的回调         | `() => void`                           |
| closed | 浮动元素关闭后的回调         | `() => void`                           |
| select | `DropdownItem`被选中时的回调 | (val:string, prefix?:string[]) => void |

### Slots

| 槽名      | 说明           |
| --------- | -------------- |
| reference | 下拉框引用元素 |
| default   | 下拉框浮动元素 |



### Exposes

| 变量名 | 说明               | 类型         |
| ------ | ------------------ | ------------ |
| close  | 用于关闭浮动元素   | `() => void` |
| open   | 用于打开浮动元素   | `() => void` |
| toggle | 前两者自动选择其一 | `() => void` |




## DropdownItem API

### Props

| 属性名       | 说明                                                         | 可选值                     | 默认值 |
| ------------ | ------------------------------------------------------------ | -------------------------- | ------ |
| suffixIcon   | 后缀图标                                                     | `String`                   | ---    |
| prefixIcon   | 前缀图标                                                     | `String`                   | ---    |
| label        | 文本                                                         | `String`                   | ---    |
| value        | `DropdownItem`的`select`回调的参数， `Dropdown`的`select`回调的第一参数 | `String`                   | ---    |
| closeOnClick | 是否点击此`DropdownItem`时关闭下拉框， 优先级比下拉框的同名选项高 | `Boolean`                  | true   |
| isActive     | 是否是活跃状态                                               | `Boolean`                  | false  |
| disabled     | 是否是禁用状态                                               | `Boolean`                  | false  |
| tag          | 组件的呈现类型                                               | `div` `s-link`             | `div`  |
| href         | 当`tag`为`s-link`时，需要跳转到的目标url                     | `String`                   | ---    |
| jumpMethod   | 当`tag`为`s-link`时，跳转方式                                | `push` `replace` `newView` | push   |



### Emits

| 事件名 | 说明         | 类型                     |
| ------ | ------------ | ------------------------ |
| select | 被选中时触发 | `(value:string) => void` |
| click  | 被选中时触发 | `() => void`             |

