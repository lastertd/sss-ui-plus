<template>
	<div v-if="flag" style="border: 1px solid black;height: 40px;width: 40px"
	     ref="test"
	></div>
</template>

<script setup lang="ts">
import {onMounted, ref} from "vue";
import {MaybeHTMLElement} from "../src/types";
import {useEventListener} from "@vueuse/core";
import {notify} from "../packages/SMessage";

const test = ref<MaybeHTMLElement>(undefined);

const flag = ref(false);

useEventListener(test, 'mouseenter', () => {
	notify({
		text:'nnnn',
		timeout:1000
	})
})

onMounted(() => {
	setTimeout(() => {
		flag.value = true;
	},5000)
})
</script>
