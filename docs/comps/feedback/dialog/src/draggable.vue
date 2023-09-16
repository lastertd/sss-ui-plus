<template>
	<s-button ghost type="primary"  @click="f1 =!f1">召唤一个可拖拽的对话框</s-button>
	<s-dialog
		v-model="f1"
		title="header"
		:show-foot="true"
		draggable
	>
		最近的一次位置将会被记录
	</s-dialog>

</template>

<script setup lang="ts">

import {ref} from "vue";


const f1 = ref<Boolean>(false);





</script>



