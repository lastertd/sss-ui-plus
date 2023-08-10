<template>

	<s-button @click="data.push(1)">click me</s-button>


	<s-scrollbar horizontal  style="width: 200px;height: 300px">
		<div class="test">
			<s-button
				v-for="item in data"
			>click me</s-button>
		</div>
	</s-scrollbar>

	<div style="height: 1000px"></div>

</template>

<script setup lang="ts">

import { notify} from "../packages/SMessage"
import {ref} from "vue";


const f = ref(true);

const hei = ref({
	height:'200px'
});

const data = ref(new Array(300));


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

.test{
	width: 600px;
	padding: 10px;
	//height: 500px;
	border: 1px solid gray;
}
.flex{
	display: flex;
	width: 300px;
	border: 1px solid black;
	gap: 10px;
	.inner{
		width: 100%;
		overflow: hidden; /* 隐藏溢出部分 */
		word-wrap: break-word; /* 自动换行，尽量保持单词完整 */

		padding-right: 10px;
	}
}

.h{
	border: solid 1px black;
	width: 200px;
	overflow: hidden;
	word-wrap: break-word;
}

</style>



