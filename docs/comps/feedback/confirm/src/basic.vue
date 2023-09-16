<template>
	<s-button
		empty
		@click="handleClick"
	>
		click me ^_^
	</s-button>
</template>

<script setup lang="ts">
import {confirm,message} from "sss-ui-plus/es/index";


const realHandleClick = () => {
	message({
		type:'success',
		text:'成功执行按钮的回调函数!'
	})
}

const handleClick = () => {
	confirm({
		title:'待确认',
		text:"你点击了这个按钮, 是否执行这个按钮的回调函数?"
	}).then(() => {
		realHandleClick();
	}).catch(() => {
		message({
			type:'danger',
			text:'用户取消了操作!'
		})
	})
}

</script>



