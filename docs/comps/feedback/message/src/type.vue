<template>
	<s-row justify-content="flex-start" :gap="20">
		<s-button
			variant="empty"
			type="success"
			@click="handleClick('success')"
		>
			success
		</s-button>
		<s-button
			variant="empty"
			type="info"
			@click="handleClick('info')"
		>
			info
		</s-button>
		<s-button
			variant="empty"
			type="warning"
			@click="handleClick('warning')"
		>
			warning
		</s-button>
		<s-button
			variant="empty"
			type="danger"
			@click="handleClick('danger')"
		>
			danger
		</s-button>
	</s-row>

</template>

<script setup lang="ts">
import {message} from "sss-ui-plus/es/index";

const handleClick = (type: string) => {

	if (type === 'success') {
		message({
			type: 'success',
			text: 'success message.'
		})
	} else if (type === 'info') {
		message({
			type: 'info',
			text: 'info message.'
		})
	} else if (type === 'warning') {
		message({
			type: 'warning',
			text: 'warning message.'
		})
	} else if (type === 'danger') {
		message({
			type: 'danger',
			text: 'danger message.'
		})
	}


}

</script>



