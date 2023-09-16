<template>
	<s-popconfirm
		content="are you sure?"
		type="info"
		@cancel="handleCancel"
		@confirm="handleConfirm"
		expression="inline-block"
		cancel-btn-text="cancel"
		confirm-btn-type="confirm"

	>
		<s-button type="primary" ghost>click me</s-button>
	</s-popconfirm>
</template>

<script setup lang="ts">
import {message} from "sss-ui-plus/es/index";


const handleCancel = () => {
	message({
		text:'cancel',
		type:'warning',
	})
}

const handleConfirm = () => {
	message({
		text:'confirm',
		type:'success'
	})

}



</script>



