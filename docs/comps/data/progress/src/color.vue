<template>
	<div class="wrapper">
		<s-progress :percentage="num" :color="[ 'yellow', 'blue', 'green', 'red']" icon="upload"></s-progress>
		<s-progress :percentage="num" :color="foo" icon="edit"></s-progress>
		<s-progress :percentage="20" type="success" color="gray"></s-progress>
	</div>

</template>

<script setup lang="ts">

import {ref} from "vue";

const num = ref(0);

const foo = (p:number) => {
	if (p < 25){
		return 'blue'
	}
	if (p < 50){
		return  'yellow';
	}
	if (p< 75) {
		return 'green';
	}
	return 'red';
}

setInterval(() => {
	num.value += Math.ceil(Math.random() * 10);
	if (num.value > 100) {
		num.value = 0;
	}
}, 1000);


</script>

<style scoped>
.wrapper {
	display: flex;
	flex-flow: column nowrap;
	gap: 20px;

}
</style>



