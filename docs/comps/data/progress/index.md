# Progress 进度条

展示任务当前进度， 也不知道保不保真。

## 基础用法

Progress 组件**必须**设置 `percentage`属性，表示进度条对应的百分比。请保证限制在[0, 100]

<demo
src="./src/basic.vue"
/>


## 显示当前百分比

使用 `test-status` 设置当前进度百分比

<demo
src="./src/show.vue"
/>

## 自定义颜色&图标

使用 `icon`指定进度条图标

使用 `color`指定进度条颜色, 此属性接受十六进制颜色值，函数和数组。

<demo
src="./src/color.vue"
/>

## Progress API

### Progress Props

| 属性名     | 说明                           | 可选值                                                       | 默认值 |
| ---------- | ------------------------------ | ------------------------------------------------------------ | ------ |
| percentage | 进度条当前进度                 | `Number`                                                     | ---    |
| variant    | 进度条表现形式                 | `'line'`                                                     | ---    |
| type       | 进度条的类型                   | `'success \| 'info' \| 'warning' \| 'danger'`                | ---    |
| textStatus | 进度条当前进度百分比显示的位置 | `'inside' \| 'outside'`                                      | ---    |
| color      | 进度条的颜色，会覆盖type的颜色 | `'String' \| '(percentage:number) => string' \| 'Array<string>'` | ---    |
| icon       | 进度条的图标                   | `String`                                                     | ---    |




## 源代码
<SRep aim="SProgress"></SRep>

## 贡献者

<SMember></SMember>