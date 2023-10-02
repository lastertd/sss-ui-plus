# Icon 图标

::: tip
图标来源于:[阿里妈妈iconfont](https://www.iconfont.cn/manage/index?spm=a313x.7781069.1998910419.23&manage_type=myprojects&projectId=4078839&keyword=&project_type=&page=),

因为更多是组件需要,所以实际tag会加上`s-`作为前缀，因此暂时不兼容对外部图标作为tag

:::

你可以通过class类的方式在任何你需要的地方使用它！ 但是为了方便使用，图标被封装成了一个组件。

## 基础用法

使用 `target` 指定图标

<demo
src="./src/basic.vue"
title="你也可以在元素class中加上 'iconfont'  'sss-${target}' 两个类名来使用图标"
/>

## 图标集合

<icon-list/>

## Icon API

### Icon Props

| 属性名       | 说明                         | 类型            | 默认值   |
|-----------|----------------------------|---------------|-------|
| target    | 图标的名称                      | `String`      | ---   |
| tag       | 图标的自定义元素标签                 | `i` / `label` | i     |
| for       | 当`type`是`label`时 label for | `String`      | ---   |
| color     | 图标的颜色                      | `String`      | ---   |
| noPadding | 是否清除默认内边距                  | `Boolean`     | false |
| rotating  | 图标是否会无限旋转                  | `Boolean`     | false |

### Icon Slots

| 名称      | 说明  |
|---------|-----|
| default | 默认槽 |

## 源代码
<SRep aim="SIcon"></SRep>

## 贡献者

<SMember></SMember>