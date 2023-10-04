<template>
	<s-row justify-content="flex-start" align-item="flex-start" :gap="20">
		<s-switch v-model="f" size="small"></s-switch>
		<s-switch v-model="f" ></s-switch>
		<s-switch v-model="f"  size="large"></s-switch>
	</s-row>
</template>

<script setup lang="ts">

import {ref} from "vue";

const f = ref<boolean>(false);

</script>



