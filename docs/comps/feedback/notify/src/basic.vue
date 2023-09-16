<template>
	<s-button
		empty
		@click="handleClick"
	>
		click me ^_^
	</s-button>
</template>

<script setup lang="ts">
import {notify} from "sss-ui-plus/es/index";

const handleClick = () => {
	const day:number = new Date().getDay();


	if (day === 4) {
		notify({
			title:'KFC CRAZY-THURSDAY😋',
			text:'巴山楚水凄凉地，Can you v me fifty?',
		})
	}
	else {
		notify({
			title:'什么时候星期四?',
			text:'oh no 今天不是, 看来不适合发电😫😫'
		})
	}
}

</script>



