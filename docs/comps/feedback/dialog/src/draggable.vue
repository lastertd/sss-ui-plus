<template>
	<s-button  @click="f1 =!f1">触发一个对话框</s-button>
	<s-dialog
		v-model="f1"
		title="试着拖动我吧"
		:show-foot="true"
		draggable
	>
		body 区域
	</s-dialog>

</template>

<script setup lang="ts">

import {ref} from "vue";


const f1 = ref<Boolean>(false);





</script>



