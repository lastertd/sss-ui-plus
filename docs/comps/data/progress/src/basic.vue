<template>
	<div class="wrapper">
		<s-progress :percentage="num"></s-progress>
		<s-progress :percentage="20" type="success"></s-progress>
		<s-progress :percentage="20" type="info"></s-progress>
		<s-progress :percentage="20" type="warning"></s-progress>
		<s-progress :percentage="20" type="danger"></s-progress>
	</div>

</template>

<script setup lang="ts">

import {ref} from "vue";

const num = ref(0);

setInterval(() => {
	num.value += Math.ceil(Math.random()*10);
	if (num.value > 100) {
		num.value = 0;
	}
},1000);


</script>

<style scoped>
.wrapper{
	display: flex;
	flex-flow: column nowrap;
	gap: 20px;

}
</style>



