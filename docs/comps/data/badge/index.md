# Badge 徽章

标记元素状态的一种方式

## 基础用法

使用 `value`指定Badge文本内容, 当未设置value时, Badge表现为一个小圆点。

使用 `type`指定Badge类型。

当Badge被使用时是一个自闭和标签、或者是没有设置子元素的标签时，Badge将会依附在Badge的父元素上。

<demo
src="./src/basic.vue"
/>

## 不同的表现形式

使用 `variant`指定Badge的表现形式

<demo
src="./src/variant.vue"
/>

## 最大值省略

当 `value`是数字时， 可以指定 `maxvalue` 作为 `value`的最大值， 超过最大值将会触发省略。`maxvalue`默认值99

<demo
src="./src/max.vue"
/>

## useBadge

除了以组件的形式使用badge以外， 还提供useBadge函数的形式。

```ts
type targetType = Ref<HTMLElement | undefined | null | VueInstance> | HTMLElement;

interface BadgeOptions {
    value: Ref<string | number> | ComputedRef<string | number>
    type?: Ref<BadgeType | undefined>,
    variant?: Ref<BadgeVariant | undefined>
}


interface BadgeReturn {
    stop: () => void    //停止使用badge
    show: () => void    //显示badges
    hidden: () => void    //隐藏badge
    setTxt: (val: string | number) => void    //设置badge文本内容
}

interface useBadge {
    (target: targetType, options: BaseOptions): BadgeReturn;
}


```

<demo
src="./src/use.vue"
/>

## Badge API

### Badge Props

| 属性名      | 说明                             | 可选值                                                       | 默认值   |
|----------|--------------------------------|-----------------------------------------------------------|-------|
| type     | 徽章类型                           | `'cyan' \| 'success' \| 'info' \| 'warning' \|  'danger'` | ---   |
| variant  | 徽章的表现形式                        | `'empty' \| 'fantasy'`                                    | ---   |
| value    | 徽章文本内容                         | `'String' \| 'Number'`                                    | ---   |
| maxvalue | 当value为number类型时, 可显示的最大value值 | `'String' \| 'Number'`                                    | ---   |
| hidden   | 是否隐藏徽章                         | `Boolean`                                                 | false |

### Badge Slots

| 名称      | 说明                |
|---------|-------------------|
| default | 默认槽， 指定badge依附的元素 |

### Badge Expose

| 属性名    | 说明          | 类型                               |
|--------|-------------|----------------------------------|
| stop   | 停止使用Badge   | `() => void`                     |
| hidden | 隐藏Badge     | `() => void`                     |
| show   | 显示Badge     | `() => void`                     |
| setTxt | 设置badge元素文本 | `(val:string \| number) => void` |

## 源代码

<SRep aim="SBadge"></SRep>

## 贡献者

<SMember></SMember>