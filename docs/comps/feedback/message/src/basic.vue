<template>
	<s-button
		empty
		@click="handleClick"
	>
		和我聊天吧
	</s-button>
</template>

<script setup lang="ts">
import {message} from "sss-ui-plus/es/index";

const handleClick = () => {
	const time = new Date().getHours();

	let welcome:string;
	if (0 <= time && time < 6) welcome = '睡觉时间, 要注意休息噢.'
	if (6 <= time && time < 12) welcome = '上午好, 有什么安排么？'
	if (12 <= time && time < 19) welcome = '下午好, 请继续努力!'
	if (19 <= time && time < 24) welcome = '晚上好, 好好放松一下吧.'

	message({
		text:welcome,
	})
}

</script>



