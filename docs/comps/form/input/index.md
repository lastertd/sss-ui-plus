# Input 输入框

用于接受键盘键入字符。

## 基础用法

使用`v-model`设置输入框绑定值。否则输入框不会响应输入事件。

<demo
src="./src/basic.vue"
/>

## 输入框祈祷中...

使用 `disabled`禁用输入框。

<demo
src="./src/disabled.vue"
/>

## 可清空

使用 `clearable`设置输入框可以一键清空。

<demo
src="./src/clearable.vue"
/>

## 附带图标

使用 `prefix-icon`设置输入框前缀图标。

使用 `suffix-icon`设置输入框后缀图标。

如果你需要在点击图标后输入框聚焦的效果，请指定输入框的id。
<demo
src="./src/icon.vue"
/>

## 限制输入长度

使用 `min-length` 、 `max-length`限制输入框的输入长度。

使用 `show-word-limit`你可以直观地看到当前绑定值的长度。

<demo
src="./src/limit.vue"
/>

## 类型

使用 `type` 可以切换输入框类型

<demo
src="./src/type.vue"
/>

## 不同的尺寸

使用 `size`指定输入框大小， 需要注意的是, 该属性控制输入框的最大高度以及字体大小。

<demo
src="./src/size.vue"
/>

## 校验函数

使用 `check-func`属性可以指定输入框的校验函数， 该函数会在输入框失焦后触发.

```ts
interface CheckFunc {
    (val: string): boolean,

    (val: string, alert?: (alertText?: string, alertIcon?: string) => void): boolean
}
```

第二个参数可选， 该参数作用为简化输入框的alert。缺点是该参数只会在输入框失去焦点后触发，你也可以通过调用input.exposes.alert函数来提示
一些信息，该函数如何调用完全取决于你。

<demo
src="./src/check.vue"
/>

## 复合型输入框

输入框框提供 `prefix-slot` 和 `suffix-slot`两个槽，用于设置输入框前后的附加元素

<demo
src="./src/slot.vue"
/>

## Input API

### Input Props

| 属性名           | 说明                                        | 可选值    | 默认值 |
|---------------|-------------------------------------------|--------|-----|
| type          | 输入框类型 | `'text' \| 'password' \| 'email'` | text |
| modelValue    | 输入框的绑定值 | `'String' \| 'Number'` | --- |
| placeholder   | 输入框占位符 | `String` | --- |
| maxLength     | 输入框绑定值最大长度 | `'String' \|'Number'` | --- |
| minLength     | 输入框绑定值最下长度 | `'String' \|'Number'` | --- |
| id            | 输入框id | `String` | --- |
| autofocus     | 输入框是否会自动聚焦 | `Bolean` | false |
| disabled      | 输入框是否被禁用 | `Bolean` | false |
| readonly      | 输入框是否只读 | `Bolean` | false |
| clearable     | 输入框是否可以被清空 | `Bolean` | false |
| size | 输入框大小 | `'small' \| 'normal' \| 'large'` | normal |
| showWordLimit | 展示输入框绑定值长度 | `Bolean` | false |
| showPassword  | 展示密码切换图标 | `Bolean` | false |
| prefixIcon    | 输入框前缀图标 | `String` | --- |
| suffixIcon    | 输入框后缀图标 | `String` | --- |
| checkFunc     | 输入框绑定值校验函数 | ` '(val:string) => boolean' \| '(value: string, alert?: (alertText?: string, alertIcon?: string) => void) => boolean'` | --- |

### Input Events

| 事件名 | 说明                                        | 类型                        |
| ------ | ------------------------------------------- | --------------------------- |
| clear  | 输入框被清空是触发                          | `() => void`                |
| input  | 输入框正在输入时触发                        | `(value: string ) => void`  |
| change | 输入框绑定值变化时触发，注意和input事件区分 | `(value: string ) => void`  |
| blur   | 输入框失去焦点时触发                        | `(evt: FocusEvent) => void` |
| focus  | 输入框获取焦点时触发                        | `(evt: FocusEvent) => void` |

### Input Slots

| 名称       | 说明           |
| ---------- | -------------- |
| prefixSlot | 输入框前缀元素 |
| suffixSlot | 输入框后缀元素 |

### Input Exposes

| 属性名      | 说明                  | 类型                                                         |
| ----------- | --------------------- | ------------------------------------------------------------ |
| isLegal     | 输入框绑定值是否合法  | `Boolean`                                                    |
| alert       | 用于提示一些信息      | ` '(val:string) => boolean' \|'(value: string, alert?: (alertText?: string, alertIcon?: string) => void) => boolean'` |
| showAlert   | 用于显示alert         | `() => void`                                                 |
| hiddenAlert | 用于隐藏alert         | `() => void`                                                 |
| toggleAlert | 用于显示 / 隐藏 alert | `() => void`                                                 |
| clear       | 清空输入框            | `() => void`                                                 |
| focus       | 输入框获取焦点        | `() => void`                                                 |
| blur        | 输入框失去焦点        | `() => void`                                                 |
| select      | 选择输入框内容        | `() => void`                                                 |



## 源代码

<SRep aim="SDivider"></SRep>

## 贡献者

<SMember></SMember>