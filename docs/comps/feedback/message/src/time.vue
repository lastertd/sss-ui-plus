<template>
	<s-row justify-content="flex-start" :gap="20">
		<s-button
			variant="empty"
			@click="handleClick(5000)"
		>
			5秒后自动关闭
		</s-button>
		<s-button
			variant="empty"
			@click="handleClick()"
		>
			不会自动关闭
		</s-button>
	</s-row>

</template>

<script setup lang="ts">
import {message} from "sss-ui-plus/es/index";

const handleClick = (timeout?:number) => {

	if (timeout === undefined){
		message({
			text:'这是一条不会自动关闭的消息.',
			timeout:0,
			showCloseIcon:true
		})
	}
	else  {
		message({
			text:`这条消息会存活${timeout}毫秒`,
			timeout:timeout,
		})
	}



}

</script>



