<template>
	<s-row justify-content="flex-start" :gap="20">
		<s-switch v-model="f"></s-switch>
		<s-switch v-model="f" type="success"></s-switch>
		<s-switch v-model="f" type="info"></s-switch>
		<s-switch v-model="f" type="warning"></s-switch>
		<s-switch v-model="f" type="danger"></s-switch>
		<s-switch v-model="f" type="cyan"></s-switch>
	</s-row>
</template>

<script setup lang="ts">

import {ref} from "vue";

const f = ref<boolean>(false);

</script>



