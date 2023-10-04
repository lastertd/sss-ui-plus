<template>
	<div class="wrapper">
		<s-progress :percentage="num" text-status="outside"></s-progress>
		<s-progress :percentage="num" text-status="inside"></s-progress>
		<s-progress :percentage="20" type="success" text-status="outside"></s-progress>
		<s-progress :percentage="20" type="info" text-status="inside"></s-progress>
		<s-progress :percentage="20" type="warning" text-status="outside"></s-progress>
		<s-progress :percentage="20" type="danger" text-status="inside"></s-progress>
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



