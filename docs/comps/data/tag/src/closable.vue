<template>

	<s-row justify-content="flex-start" :gap="20" wrap>
		<s-tag
			v-for="(item, index) in data"
			closable
			@close="del(index)"
		>{{item}}</s-tag>
		<s-button
			v-if="flag"
			@click="handleClick"
		>
		add new tag
		</s-button>
		<s-input
			v-else
			v-model="val"
			ref="ipt"
			class="demo"
			@blur="handleBlur"
			@keydown.enter="handleBlur"

		></s-input>

	</s-row>


</template>


<script setup lang="ts">

import {nextTick, ref} from "vue";
import {SInputInstance} from "sss-ui-plus/es";

const data = ref(['tag 1', 'tag 2', 'tag 3', 'tag 4']);
const flag = ref(true);
const val = ref('');
const ipt = ref<SInputInstance>();


const handleClick = async () => {
	flag.value = false;
	await nextTick();
	ipt.value?.focus();
}
const handleBlur = () => {
	flag.value = true;
	add(val.value);
	val.value = '';
}

const del = (index: number) => {
	console.log(index)
	data.value.splice(index, 1);
}

const add = (val: string | undefined) => {
	if (!val) return;
	data.value.push(val);
}

</script>
<style scoped>
.demo{
	max-width: 100px;
}
</style>