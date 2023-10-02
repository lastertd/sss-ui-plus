<template>
	<s-button variant="empty" @click="handleClick">
		点击送地狱火
	</s-button>
</template>

<script setup lang="ts">
import {confirm,message} from "sss-ui-plus/es/index";


const realHandleClick = () => {
	window.location.href = 'https://www.bilibili.com/video/BV1GJ411x7h7';
}

const handleClick = () => {
	confirm({
		title:'待确认...',
		text:"只差最后一步!点击确认"
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



