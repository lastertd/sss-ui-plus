<template>
	<s-button @click="handleClick" style="margin-bottom: 20px">触发一个对话框</s-button>
	<s-row justify-content="center">
		<div style="width: 90%;height: 500px;border: solid 1px #a19999;position: relative">
			<s-dialog
				v-model="f"
				part
			>
				wink🥰~
			</s-dialog>
		</div>
	</s-row>

</template>

<script setup lang="ts">

import {ref} from "vue";


const f = ref(false);

const handleClick = () => {
	f.value = !f.value;
}


</script>



