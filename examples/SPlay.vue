<template>
	<s-input
		ref="ipt"
		v-model="val"
		placeholder="words limit"
		min-length="5"
		show-word-limit
		@blur="foo"
	></s-input>
</template>
<script setup lang="ts">
import {ref} from "vue";
import {SInputInstance} from "sss-ui-plus/es";

const val = ref(undefined);
const ipt = ref<SInputInstance | null>(null);

const foo = () => {
	if (!ipt.value.isLegal){
		ipt.value.alert('请至少输入5个字符')
	}
}

</script>



