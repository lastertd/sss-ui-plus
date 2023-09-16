<template>
	<s-button ghost type="primary" @click="handleClick">触发一个对话框</s-button>
	<s-dialog
		v-model="f"
		title="header"
		:show-foot="true"
		:before-close="beforeClose"
	>
		wink🥰~
	</s-dialog>
</template>

<script setup lang="ts">

import {ref} from "vue";
import {confirm} from "sss-ui-plus/es/index";


const f = ref<Boolean>(false);

const handleClick = () => {
	f.value = !f.value;
}

const beforeClose = (done:() => void ) => {
	confirm({
		type:'info',
		title:'确认要关闭这个对话框么?'
	}).then(() => {
		done();
	}).catch(e => {
	// 	ERR
	})
}

</script>



