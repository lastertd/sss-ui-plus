# 设计原则

## 一致性

sss-ui-plus希望统一组件的部分props, 以免出现以下情况

```vue
<template>
	<compoment empty fantasy round cicle disabled loading>
		click me
	</compoment>
</template>
```
其中 empty、 fantasy 都是控制组件的表现形式; round 、circle 控制组件的外观; disabled、 loading 控制组件是否被允许.

很明显这些成组的属性时互斥的, 且不同的组件之间, 这些属性的名字大不相同. 可能有时候忘记了属性名而去查阅文档。为此sss-ui-plus希望将这些属性分组为
统一的props。 

比如组件的表现形式统一使用`variant`属性表示， `variant`不同的取值代表不同的表现形式.

```vue
<template>
	<s-button variant="fantasy" status="round" >
		click me
	</s-button>
</template>
```

## 动态css属性提升

在组件中，难免会出现通过props控制某些css属性，比如color颜色;也同样会出现组件不同的修饰符，改变一些css属性，比如:
```less
.s-button{
	color: black;
	background-color: gray;
}
.s-button--success{
	color: white;
	background-color: green;
}
```

为此sss-ui-plus统一这些动态css属性为var变量并设置在组件的最外层样式中:
```less
.s-button{
	--sss-button-font-color:black;
	--sss-button-bg-color:gray
}
.s-button{
	color: var(--sss-button-font-color);
	background-color: var(--sss-button-bg-color);
}
.s-button--success{
	--sss-button-font-color:white;
	--sss-button-bg-color:green;
}

```
在vue中:
```vue
<template>
	<component :style="buttonSdl" >
	</component>
</template>

<script lang="ts">

import {computed} from "vue";

const buttonSdl = computed(() => {
	return{
		'--sss-com-css-var':props.cssVar
	}
})
</script>
```

## 遵循BEM规范

sss-ui-plus所有组件css均遵循BEM规范