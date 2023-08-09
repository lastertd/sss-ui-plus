<template>


	<div style="height: 800px"></div>






	<s-popconfirm type="info"  title="are you sure?"
	>
		<s-button type="primary" ghost >hover me</s-button>

	</s-popconfirm>

	<div style="height: 1000px"></div>

</template>

<script setup lang="ts">

import {ref} from "@vue/runtime-core";
import { notify} from "../packages/SMessage"


const f = ref(true);


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
	//width: 100px;
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



