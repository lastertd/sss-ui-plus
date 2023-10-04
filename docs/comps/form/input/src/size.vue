<template>
	<s-row justify-content="flex-start" align-item="flex-start" :gap="20">
		<s-input v-model="val" placeholder="small size" size="small"  ></s-input>
		<s-input v-model="val" placeholder="normal size" ></s-input>
		<s-input v-model="val" placeholder="large size" size="large" ></s-input>
	</s-row>

</template>
<script setup lang="ts">

import {ref} from "vue";

const val = ref(undefined);
</script>



