<template>
	<s-row justify-content="flex-start" :gap="20">
		<s-switch
			v-model="f"
			:loading="l"
			:before-change="foo"

		></s-switch>
	</s-row>
</template>

<script setup lang="ts">

import {nextTick, ref} from "vue";
import {delay, message} from "sss-ui-plus/es";

const f = ref<boolean>(false);
const l = ref(false);

const foo = async (done: () => void) => {
	l.value = true;

	await  delay(1500);
	l.value = false;
	message({
		text:'success',
		type:'success',
		timeout:1000,
	})

	await  nextTick();
	done();
}

</script>



