<template>
	<s-button  @click="handleClick">触发一个抽屉</s-button>
	<s-drawer
		v-model="f"
		ref="drawer"
		title="修改默认标题"
		:show-close-icon="false"
	>
		body 区域
		<template #footer>
			<s-button type="cyan" @click="handleClick2">点击确认</s-button>
		</template>
	</s-drawer>
</template>

<script setup lang="ts">

import {ref} from "vue";
import {confirm, SDialogInstance} from "sss-ui-plus/es/index";


const f = ref<Boolean>(false);
const drawer = ref<SDialogInstance>(null);

const handleClick = () => {
	f.value = !f.value;
}

const handleClick2 = () => {
	drawer.value.confirm();
}


</script>



