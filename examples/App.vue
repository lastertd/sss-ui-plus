<template>

	<s-test></s-test>
	<s-button  @click="handleClick">click me</s-button>


	<s-dialog
		v-model="f"
		show-foot
	>
		hhh
	</s-dialog>

	<button ref="btn" v-if="f" >click me</button>








	<!--	<div class="container_">-->
	<!--		<div class="item"></div>-->
	<!--		<div class="item"></div>-->
	<!--		<div class="item"></div>-->
	<!--		<div class="item"></div>-->
	<!--		<div class="item"></div>-->
	<!--		<div class="item"></div>-->
	<!--		<div>-->
	<!--			<div class="item" ref="item"></div>-->

	<!--		</div>-->
	<!--	</div>-->

	<!--	<div style="height: 500px"></div>-->

	<img
		src="https://pic.imgdb.cn/item/64ddccfa661c6c8e5441200e.jpg"
		alt="test"
		class="img"
		ref="img"
	>


</template>

<script setup lang="ts">

import {ref} from "vue";
import {useElementVisibility} from "@vueuse/core";

import STest from "./STest.vue";
import {message, notify} from "../packages/SMessage";

const item = ref();
const img = ref();
const btn = ref(null);
const f=  ref(false);

useElementVisibility(item);
const getScrollParent = function (el: HTMLElement): HTMLElement {
	const fa = el.parentNode as HTMLElement;
	const overflow = window.getComputedStyle(fa).overflow;
	if (fa === document.body || el === document.body) return document.body;
	if (overflow === 'auto' || overflow === 'scroll') return fa;
	return getScrollParent(fa);
}


const handleClick = () => {
	message({
		timeout:0
	})
}

</script>


<style lang="less">
@import "src/styles/global";

.clearPos{
	position: absolute;
	left: 0;
	top: 0;
	transition: unset;
}
.img {
	height: 400px;
	transition: all .3s ease;
}



#app {
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
	gap: 10px;
	padding-top: 50px;
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



