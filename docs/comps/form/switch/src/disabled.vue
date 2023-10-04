<template>
	<s-row justify-content="flex-start" align-item="flex-start" :gap="20">
		<s-switch v-model="f"  disabled ></s-switch>
		<s-switch v-model="f"  loading ></s-switch>


	</s-row>
</template>

<script setup lang="ts">

import {ref} from "vue";

const f = ref<boolean>(false);

</script>



