<template>
	<s-row justify-content="flex-start" :gap="20">
		<s-button
			variant="empty"
			@click="handleClick('top-right')"
		>
			右上角
		</s-button>
		<s-button
			variant="empty"
			@click="handleClick('bottom-right')"
		>
			右下角
		</s-button>
		<s-button
			variant="empty"
			@click="handleClick('bottom-left')"
		>
			左下角
		</s-button>
		<s-button
			variant="empty"
			@click="handleClick('top-left')"
		>
			左上角
		</s-button>
	</s-row>

</template>

<script setup lang="ts">
import {notify} from "sss-ui-plus/es/index";

const handleClick = (placement:string) => {

	notify({

		title:`${placement} notify`,
		text:'☘☘☘',
		placement,
	})


}

</script>



