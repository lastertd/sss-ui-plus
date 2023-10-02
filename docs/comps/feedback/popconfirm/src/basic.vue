<template>
	<s-popconfirm
		text="are you sure?"
		type="info"
		@cancel="handleCancel"
		@confirm="handleConfirm"
	>
		<s-button >click me</s-button>
	</s-popconfirm>
</template>

<script setup lang="ts">
import {message} from "sss-ui-plus/es/index";


const handleCancel = () => {
	message({
		text:'用户取消确认!',
		type:'warning',
	})
}

const handleConfirm = () => {
	message({
		text:'💟💟💟',
		type:'success'
	})

}



</script>



