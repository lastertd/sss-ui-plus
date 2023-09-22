<template>
	<s-badge >
		<s-button empty @click="handleClick">
			新消息待接收
		</s-button>
	</s-badge>

	<span style="margin-left: 20px"></span>
	<s-button empty @click="handleClick2">
		长标题测试
	</s-button>

</template>

<script setup lang="ts">
import {notify} from "sss-ui-plus/es/index";

const handleClick = () => {
	const day:number = new Date().getDay();


	if (day === 4) {
		notify({
			title:'肯德基疯狂星期四😋',
			text:'巴山楚水凄凉地，Can you v me fifty?',
		})
	}
	else {
		notify({
			title:'什么时候星期四?',
			text:'oh no 今天不是, 看来不适合发电😫😫',
		})
	}
}
const handleClick2 = () => {
	notify({
		title:'这是特别特别长长长长长长长长长长的标题',
		text:'标题尽量简短, 如果太长会被省略.'
	})
}

</script>



