<template>
	<s-row horizontal="flex-start" :gap="10">
		<s-button
			empty
			@click="handleClick"
		>
			距离上一条消息30px
		</s-button>

	</s-row>

</template>

<script setup lang="ts">
import {message} from "sss-ui-plus/es/index";

const handleClick = () => {

	message({
		text:'设置了偏移量',
		offset:30
	})


}

</script>



