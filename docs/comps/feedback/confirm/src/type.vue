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
import {confirm} from "sss-ui-plus/es/index";

const handleClick = (type:string) => {

	if (type === 'success'){
		confirm({
			type:'success',
			text:'success confirm.'
		})
	}
	else if (type === 'info') {
		confirm({
			type:'info',
			text:'info confirm.'
		})
	}
	else if (type === 'warning') {
		confirm({
			type:'warning',
			text:'warning confirm.'
		})
	}
	else if (type === 'danger') {
		confirm({
			type:'danger',
			text:'danger confirm.'
		})
	}


}

</script>



