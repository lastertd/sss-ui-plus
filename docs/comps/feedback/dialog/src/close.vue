<template>
	<s-button ghost type="primary"  @click="f1 =!f1">不能通过点击遮罩和按下esc关闭</s-button>
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



