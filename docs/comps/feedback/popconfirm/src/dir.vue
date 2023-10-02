<template>
	<s-popconfirm
		content="are you sure?"
		type="info"
		@cancel="handleCancel"
		@confirm="handleConfirm"
		cancel-btn-text="cancel"
		confirm-btn-type="confirm"
		icon="edit"
		icon-color="blue"

	>
		<s-button>click me</s-button>
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



