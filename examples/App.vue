<template>
	<div style="width: 500px">
		<s-button @click="addItem">add item</s-button>
		<s-button style="margin: 0 0 30px 30px" @click="delItem">del item</s-button>
		<s-scrollbar style="height: 400px">
			<div class="container">
				<div class="item"
				     v-for="(item,index) in dataList"
				>
					{{index}}
				</div>
			</div>
		</s-scrollbar>
	</div>

<div style="height: 500px"></div>

</template>

<script setup lang="ts">

import { notify} from "../packages/SMessage"
import {ref} from "vue";

const dataList = ref(new Array(5));
const addItem = () => {
	dataList.value.push(0);
}
const delItem = () => {
	dataList.value.pop();
}

const handleClick = () => {
	notify({
		type:'success',
		title:'nih',
		text:'hh1111111111111111111111111111111hh',
		timeout:0
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

.container{
	padding: 10px;
}
.item{
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



