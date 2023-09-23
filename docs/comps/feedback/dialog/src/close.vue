<template>
	<s-button @click="f1 =!f1">触发一个对话框</s-button>
	<s-dialog
		v-model="f1"
		title="header"
		:show-foot="true"
		:close-on-click-mark="false"
		:close-on-press-escape="false"
	>

	</s-dialog>

</template>

<script setup lang="ts">

import {ref} from "vue";


const f1 = ref<Boolean>(false);


</script>



