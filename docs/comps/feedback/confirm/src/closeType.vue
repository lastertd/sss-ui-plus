<template>
	<s-button
		empty
		@click="handleClick"
	>
		写点什么好呢?
	</s-button>
</template>

<script setup lang="ts">
import {confirm, message} from "sss-ui-plus/es/index";


const handleClick = () => {
	confirm({
		text: "试试不同的关闭类型吧!"
	}).then(() => {
		message({
			type: 'success',
			text: '通过确认按钮关闭'
		})
	}).catch((err) => {
		console.log(err)
		if (err === 'cancel') {
			message({
				type: 'danger',
				text: '通过取消按钮关闭'
			})
		}
		else if (err === 'esc') {
			message({
				type: 'warning',
				text: '通过按下esc关闭'
			})
		}
		else if (err === 'mark') {
			message({
				type: 'warning',
				text: '通过点击遮罩关闭'
			})
		}
		else if (err === 'icon') {
			message({
				type: 'warning',
				text: '通过close图标关闭'
			})
		}
	})
}

</script>



