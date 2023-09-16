<template>
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
</template>

<script setup lang="ts">

import {ref} from "vue";

const dataList = ref(new Array(3));

const addItem = () => {
	dataList.value.push(0);
}
const delItem = () => {
	dataList.value.pop();
}

</script>

<style lang="less" scoped>
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


