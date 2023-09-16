<template>
	<s-button
		empty
		@click="handleClick"
	>
		设置偏移量
	</s-button>
</template>

<script setup lang="ts">
import {confirm} from "sss-ui-plus/es/index";




const handleClick = () => {
	confirm({
		text:"top是一个字符串，因此你可以任何有效单位, 比如vh",
		top:'20vh',
	})
}

</script>



