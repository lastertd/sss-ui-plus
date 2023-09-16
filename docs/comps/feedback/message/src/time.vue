<template>
	<s-row horizontal="flex-start" :gap="10">
		<s-button
			empty
			@click="handleClick(3000)"
		>
			会自动关闭
		</s-button>
		<s-button
			empty
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
			timeout:0
		})
	}
	else  {
		message({
			text:`这条消息会存活${timeout}毫秒`,
			timeout:timeout
		})
	}



}

</script>



