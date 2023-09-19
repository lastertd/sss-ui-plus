<template>

<s-play></s-play>

	<s-button @click="handleClick">click me</s-button>
	<s-dialog ref="dlg"  v-model="f" draggable show-close-icon append-to-body
		@close="hanldeClose"
	>
		<s-button  @click="hh">close</s-button>
		<s-button  @click="tt">toggle</s-button>
	</s-dialog>


	<div style="height: 1500px"></div>


</template>

<script setup lang="ts">
import { SPartial} from "@sss-ui-plus/components"
import {SDialogInstance} from "@sss-ui-plus/components/SDialog"
import {ref} from "@vue/runtime-core";

import {useBadge} from "@sss-ui-plus/hooks/useBadge";
import SPlay from "./SPlay.vue";



const f = ref(false);
const val = ref<number>(3)
const btn = ref();
const dlg = ref<SDialogInstance>();
const demo = ref();

const hanldeClose = function (trigger){
	console.log('close by',trigger);
}

const hh = function (){
	dlg.value!.close();
}
const tt = function (){
	dlg.value!.toggle();
}
const handleClick = function () {
	f.value = !f.value
	val.value++;
	dlg.value!.open();
}

const {setTxt} = useBadge(demo, 'primary', val);


</script>


<style lang="less">
body{
	&::-webkit-scrollbar {
		width: 6px;
	}

	&::-webkit-scrollbar-thumb {
		background-color: var(--sss-color-gray-dark); /* 设置滚动条滑块的背景颜色 */
		border-radius: 9999px;

	}

	&::-webkit-scrollbar-button {
		display: none;
	}
}


#app {

	display: flex;
	flex-flow: column nowrap;
	align-items: center;
	gap: 10px;
	padding-top: 50px;
	color: var(--sss-color-black-light);
}

.demo {
	width: 60px;
	height: 30px;
	border: solid 1px black;
	background: #1BA784;

}

</style>



