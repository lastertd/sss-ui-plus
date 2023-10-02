<template>
	<s-row justify-content="flex-start" :gap="20">
		<s-button @click="handleClick('top')">top drawer</s-button>
		<s-button @click="handleClick('right')">right drawer</s-button>
		<s-button @click="handleClick('bottom')">bottom drawer</s-button>
		<s-button @click="handleClick('left')">left drawer</s-button>
	</s-row>

	<s-drawer :position="placement" v-model="f" title="drawer title">
		body 区域
	</s-drawer>

</template>

<script setup lang="ts">
import {ref} from "vue"

type Placement = 'top' | 'right' | 'bottom' | 'left';

const f = ref<boolean>(false);
const placement = ref<Placement>("top");


const handleClick = (p: Placement) => {
	placement.value = p;
	f.value = !f.value;

}


</script>



