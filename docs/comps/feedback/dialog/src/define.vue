<template>
	<s-button  @click="handleClick">触发一个对话框</s-button>
	<s-dialog
		v-model="f"
		ref="dialog"
		title="修改默认标题"
		:show-close-icon="false"
	>
		body 区域
		<template #footer>
			<s-button type="cyan" @click="handleClick2">点击确认</s-button>
		</template>
	</s-dialog>
</template>

<script setup lang="ts">

import {ref} from "vue";
import {confirm, SDialogInstance} from "sss-ui-plus/es/index";


const f = ref<Boolean>(false);
const dialog = ref<SDialogInstance>(null);

const handleClick = () => {
	f.value = !f.value;
}

const handleClick2 = () => {
	dialog.value.confirm();
}


</script>



