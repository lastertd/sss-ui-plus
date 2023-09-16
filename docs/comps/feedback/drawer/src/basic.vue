<template>
	<s-row horizontal="flex-start" :gap="10">
		<s-button ghost type="primary" @click="handleClick('top')" >top drawer</s-button>
		<s-button ghost type="primary" @click="handleClick('right')">right drawer</s-button>
		<s-button ghost type="primary" @click="handleClick('bottom')">bottom drawer</s-button>
		<s-button ghost type="primary" @click="handleClick('left')">left drawer</s-button>
	</s-row>

	<s-drawer :position="placement" v-model="f" title="drawer title">
		在这里，你可以放任何你需要的元素！
	</s-drawer>

</template>

<script setup lang="ts">
import {ref} from "vue"

type Placement = 'top' | 'right' | 'bottom' | 'left';

const f = ref<Boolean>(false);
const placement = ref<Placement>("top");


const handleClick = (p:Placement) => {
	placement.value = p;
	f.value = !f.value;

}


</script>



