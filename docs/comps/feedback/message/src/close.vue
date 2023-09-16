<template>
	<s-row horizontal="flex-start" :gap="10">
		<s-button
			empty
			@click="handleClick"
		>
			糟糕!想不到文案了!
		</s-button>

	</s-row>

</template>

<script setup lang="ts">
import {message} from "sss-ui-plus/es/index";

const handleClick = () => {

	message({
		text:'具有close图标',
		showClose:true
	})


}

</script>



