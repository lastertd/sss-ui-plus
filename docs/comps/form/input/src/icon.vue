<template>
	<s-row justify-content="flex-start" :gap="20">
		<s-input
			v-model="val"
			placeholder="write something"
			suffix-icon="edit"
			id="ipt1"
		></s-input>
		<s-input
			v-model="val"
			placeholder="write something"
			prefix-icon="email"
			id="ipt2"
		></s-input>
	</s-row>


</template>
<script setup lang="ts">

import {ref} from "vue";



const val = ref(undefined);

</script>



