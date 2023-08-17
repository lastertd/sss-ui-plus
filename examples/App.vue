<template>


	<s-button @click="handleClick">click me</s-button>
	<div class="container_">
		<div class="item"></div>
		<div class="item"></div>
		<div class="item"></div>
		<div class="item"></div>
		<div class="item"></div>
		<div class="item"></div>
		<div>
			<div class="item" ref="item"></div>

		</div>
	</div>

	<div style="height: 500px"></div>


</template>

<script setup lang="ts">

import {onMounted, ref} from "vue";
import {unrefElement, useElementVisibility} from "@vueuse/core";

const item = ref();
const targetIsVisible = useElementVisibility(item)

const getScrollParent = function (el:HTMLElement):HTMLElement {
	const fa = el.parentNode as HTMLElement;
	const overflow = window.getComputedStyle(fa).overflow;
	if (fa === document.body || el === document.body) return document.body;
	if (overflow === 'auto' || overflow === 'scroll') return fa;
	return getScrollParent(fa);
}


const handleClick = () => {
	const el = unrefElement(item) as HTMLElement;
	const parent = getScrollParent(el) as HTMLElement;
	console.log(el.offsetTop, el.getBoundingClientRect().top, parent.offsetHeight+parent.getBoundingClientRect().top)
	console.log(targetIsVisible.value)


	console.log(getScrollParent(el))
}



</script>


<style lang="less">
@import "src/styles/global";

#app {
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
	gap: 10px;
	margin-top: 50px;
	color: var(--sss-color-black-light);
}

.container_ {
	.useBorderBox();
	.useBorderRadius5px();
	.useBorderGray();
	height: 200px;
	width: 700px;
	padding: 20px;
	overflow: auto;
}

.item {
	.useBorderBox();
	.useBorderRadius5px();
	.useBorderGrayDarker();
	margin: 10px 0;
	height: 100px;
}


</style>



