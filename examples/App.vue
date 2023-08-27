<template>


	<s-button  @click="handleClick">click me</s-button>


	<s-dialog
		v-model="f"
		show-foot
	>
		hhh
	</s-dialog>

	<button ref="btn" v-if="f" >click me</button>



<!--	<el-button type="primary"></el-button>-->






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

import {nextTick, onMounted, ref} from "vue";
import {unrefElement, useElementVisibility} from "@vueuse/core";
import delay from "../src/utils/delay";
import {confirm, notify} from "../packages/SMessage";
import useMark from "../src/hooks/useMark.ts";

const item = ref();
const img = ref();
const btn = ref(null);
const f=  ref(false);

// useMark(btn, "cover")


const targetIsVisible = useElementVisibility(item)

const getScrollParent = function (el: HTMLElement): HTMLElement {
	const fa = el.parentNode as HTMLElement;
	const overflow = window.getComputedStyle(fa).overflow;
	if (fa === document.body || el === document.body) return document.body;
	if (overflow === 'auto' || overflow === 'scroll') return fa;
	return getScrollParent(fa);
}


const handleClick = () => {
	// confirm({
	// 	title:'ggg'
	// })
	f.value = !f.value;


	// const el = unrefElement(item) as HTMLElement;
	// const parent = getScrollParent(el) as HTMLElement;
	// console.log(el.offsetTop, el.getBoundingClientRect().top, parent.offsetHeight+parent.getBoundingClientRect().top)
	// console.log(targetIsVisible.value)
	//
	//
	// console.log(getScrollParent(el))
  //
	// const el = unrefElement(img) as HTMLElement;
  // const clone = el.cloneNode(true) as HTMLElement;
  // clone.classList.add('clearPos');
  //
  // const {left, top} = el.getBoundingClientRect();
  //
  // clone.style.left = `${left}px`;
  // clone.style.top = `${top}px`;
  //
  // delay(0).then(() => {
	//   clone.style.left = '50%';
	//   clone.style.top = '50%';
	//   clone.style.transform = 'translate(-50%, -50%)';
	//   clone.style.height = '100%';
	//   el.style.opacity = '0';
  //
  // })
  //
  //
  //
  // document.body.appendChild(clone);

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



