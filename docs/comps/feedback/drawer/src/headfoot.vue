<template>
	<s-row horizontal="flex-start" :gap="10">
		<s-button ghost type="primary" @click="f1 = !f1">不携带头部</s-button>
		<s-button ghost type="primary" @click="f2 = !f2">不携带尾部</s-button>
	</s-row>

	<s-drawer v-model="f1" :show-head="false" position="right" >

	</s-drawer>

	<s-drawer v-model="f2" :show-foot="false" position="right" >

	</s-drawer>

</template>

<script setup lang="ts">
import {ref} from "vue"


const f1 = ref<Boolean>(false);
const f2 = ref<Boolean>(false);





</script>



