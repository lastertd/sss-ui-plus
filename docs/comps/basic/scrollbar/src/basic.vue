<template>
	<s-row justify-content="center">
		<s-scrollbar style="height: 400px;width: 90%" >
			<div class="container">
				<div class="item"
				     v-for="(item,index) in dataList"
				>
					{{index}}
				</div>
			</div>
		</s-scrollbar>
	</s-row>

</template>

<script setup lang="ts">

import {ref} from "vue";

const dataList = ref(new Array(30));
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


