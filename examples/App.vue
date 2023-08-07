<template>





	<s-switch v-model="f"   ></s-switch>


</template>

<script setup lang="ts">

import {ref} from "@vue/runtime-core";
import {confirm, notify} from "../packages/SMessage"


const f = ref(true);


const handleClick = () => {
	notify({
		type:'success',
		text:'hh11111111111111111111111111hh',
	})
}


</script>


<style lang="less">
#app {
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
	gap: 10px;
	margin-top: 50px;
	color: var(--sss-color-black-dark);
}

.test{
	width: 400px;
	height: 600px;
	border: 1px solid #af4242;
}


</style>



