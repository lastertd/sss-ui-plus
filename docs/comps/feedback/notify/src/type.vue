<template>
	<s-row justify-content="flex-start" :gap="20">
		<s-button variant="empty" type="success" @click="handleClick('success')">
			success
		</s-button>
		<s-button variant="empty" type="info" @click="handleClick('info')">
			info
		</s-button>
		<s-button variant="empty" type="warning" @click="handleClick('warning')">
			warning
		</s-button>
		<s-button variant="empty" type="danger" @click="handleClick('danger')">
			danger
		</s-button>
	</s-row>

</template>

<script setup lang="ts">
import {notify} from "sss-ui-plus/es/index";
import {ElementTypes} from "@sss-ui-plus/typings";

const handleClick = (type: ElementTypes) => {

	notify({
		type:type,
		title:`${type} notify`,
		text:`${type} content.`
	})



}

</script>



