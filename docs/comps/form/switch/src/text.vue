<template>
	<s-row justify-content="flex-start" align-item="flex-start" :gap="20">
		<s-switch v-model="f" active-text="yes" inactive-text="no" ></s-switch>
		<s-switch v-model="f" active-text="yes" inactive-text="no" text-status="inside" ></s-switch>
		<s-switch
			v-model="f"
			active-text="yes yes yes"
			inactive-text="no"
			text-status="inside"
			style="max-width: 100px"
		></s-switch>

	</s-row>
</template>

<script setup lang="ts">

import {ref} from "vue";

const f = ref<boolean>(false);

</script>



