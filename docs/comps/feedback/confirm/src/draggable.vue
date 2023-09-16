<template>
	<s-button
		empty
		@click="handleClick"
	>
		召唤一个可以被拖拽的确认框!
	</s-button>
</template>

<script setup lang="ts">
import {confirm} from "sss-ui-plus/es/index";




const handleClick = () => {
	confirm({
		title:'可以被拖拽',
		text:"将鼠标移动到标题上试试~",
		top:'20vh',
		draggable:true,
	})
}

</script>



