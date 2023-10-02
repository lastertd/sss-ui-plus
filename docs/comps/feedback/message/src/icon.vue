<template>
	<s-row justify-content="flex-start" :gap="20">
		<s-button
			variant="empty"
			@click="handleClick"
		>
			click me
		</s-button>

	</s-row>

</template>

<script setup lang="ts">
import {message} from "sss-ui-plus/es/index";

const handleClick = () => {

	message({
		text:'自定义图标',
		icon:'edit',
		color:'red'
	})


}

</script>



