<template>
	<s-button  @click="handleClick">触发一个对话框</s-button>
	<s-dialog
		v-model="f"
		title="header"
	>
		wink🥰~
	</s-dialog>
</template>

<script setup lang="ts">

import {ref} from "vue";


const f = ref<Boolean>(false);

const handleClick = () => {
	f.value = !f.value;
}


</script>



