<script setup lang="ts">

import {ref} from "vue";
import TransitionItem from "./transitionItem.vue";

const f = ref(true);

const handleClick = () => {
	f.value = !f.value
}

</script>

<template>
	<s-button @click="handleClick">click me</s-button>


	<div class="transition-box">
		<transition-item transition="s-transition-collapse--vertical" :visible="f"></transition-item>
		<transition-item transition="s-transition-collapse--horizontal" :visible="f"></transition-item>

	</div>


</template>


