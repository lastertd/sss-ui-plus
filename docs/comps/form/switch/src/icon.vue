<template>
	<s-row justify-content="flex-start" :gap="20">
		<s-switch
			v-model="f"
			active-icon="edit"
			active-text="编辑"
			inactive-icon="option"
			inactive-text="设置"
			trigger-icon="eye"
		></s-switch>
	</s-row>
</template>

<script setup lang="ts">

import {ref} from "vue";

const f = ref<boolean>(false);

</script>



