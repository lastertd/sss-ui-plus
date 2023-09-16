<template>
	<s-row horizontal="space-around" :gap="10">
		<s-button
			empty
			@click="handleClick('top-right')"
		>
			右上角
		</s-button>
		<s-button
			empty
			@click="handleClick('bottom-right')"
		>
			右下角
		</s-button>
		<s-button
			empty
			@click="handleClick('bottom-left')"
		>
			左下角
		</s-button>
		<s-button
			empty
			@click="handleClick('top-left')"
		>
			左上角
		</s-button>
	</s-row>

</template>

<script setup lang="ts">
import {notify} from "sss-ui-plus/es/index";

const handleClick = (placement:string) => {

	if (placement === 'top-right'){
		notify({

			text:'右上角通知.',
			placement,
		})
	}
	else if (placement === 'bottom-right') {
		notify({
			text:'右下角通知',
			placement,
		})
	}
	else if (placement === 'bottom-left') {
		notify({
			text:'左下角通知',
			placement,
		})
	}
	else if (placement === 'top-left') {
		notify({
			text:'左上角通知',
			placement,
		})
	}


}

</script>



