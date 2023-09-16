<template>
	<s-scrollbar style="width: 100%" horizontal >
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

const dataList = ref(new Array(30));
</script>

<style lang="less" scoped>
.container{
	padding: 10px;
	display: flex;
	flex-flow: row nowrap;
}
.item{
	flex-shrink: 0;
	margin: 0 10px;
	width: 100px;
	height: 80px;
	border: solid 1px var(--sss-color-gray-dark);
	background: var(--sss-color-primary-fade);
	border-radius: 5px;
	color: var(--sss-color-black-light);
	text-align: center;
	line-height: 80px;

}
</style>


