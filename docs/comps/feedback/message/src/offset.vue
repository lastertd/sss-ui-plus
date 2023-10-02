<template>
	<s-row justify-content="flex-start" :gap="20">
		<s-button
			variant="empty"
			@click="handleClick"
		>
			offset: 30px
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



