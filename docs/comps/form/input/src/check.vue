<template>
	<s-row justify-content="flex-start" :gap="20">
		<s-input
			v-model="val"
			placeholder="write something"
			:check-func="foo"
		></s-input>
		<s-input
			ref="ipt"
			v-model="val"
			placeholder="write something"
			:check-func="bar"
			@blur="blur"
		></s-input>
	</s-row>


</template>
<script setup lang="ts">

import {ref} from "vue";
import {SInputInstance} from "sss-ui-plus/es";


const val = ref(undefined);
const ipt = ref<SInputInstance | null>(null);
const foo = (val: string, alert: Function) => {
	if (val.length < 5) {
		alert('请至少键入5个字符', 'info');
		return false;
	}
	if (val.length > 10) {
		alert('最多键入15个字符');
		return false
	}
	return true
}

const bar = (val: string) => {
	return !(val.length < 5 || val.length > 15);
}

const blur = () => {
	if (!ipt.value.isLegal){
		ipt.value.alert();
	}
}

</script>



