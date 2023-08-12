<template>



	<div ref="ipt" style="height: 50px;width: 50px;border: 1px solid black"></div>


	<s-dropdown trigger="click" :reference="ipt"  show-arrow quick-track>
		<s-dropdown-item label="hhhhh" value="nihaoya"></s-dropdown-item>
		<s-dropdown-item label="hhhhh" value="nihaoya"></s-dropdown-item>
	</s-dropdown>

</template>

<script setup lang="ts">

import {notify} from "../packages/SMessage"
import {computed, onMounted, provide, ref} from "vue";
import {useDraggable} from "../src/hooks/useDraggable";
import {MaybeHTMLElement} from "../src/types";
const btn = ref<MaybeHTMLElement>(undefined);
const ipt = ref<MaybeHTMLElement>(undefined);


const f = computed(() => {
	return true;
})

useDraggable(ipt, ipt, f);



const handleClick = () => {
	notify({
		type: 'success',
		title: 'nih',
		text: 'hh1111111111111111111111111111111hh',
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
	color: var(--sss-color-black-light);
}

.container {
	position: relative;
	padding: 10px;
	width: 300px;
	height: 300px;
}

.item {
	box-sizing: border-box;
	margin: 10px 0;
	width: 100%;
	height: 80px;
	border: solid 1px var(--sss-color-gray-dark);
	background: var(--sss-color-primary-fade);
	border-radius: 5px;
	color: var(--sss-color-black-light);
	text-align: center;
	line-height: 80px;
}

</style>



