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
		<transition-item transition="s-transition-fadeUp" :visible="f"/>
		<transition-item transition="s-transition-fadeUp--half" :visible="f"/>
		<transition-item transition="s-transition-fadeUp--completely" :visible="f"/>
	</div>


</template>


