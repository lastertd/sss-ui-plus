<template>
	<s-button ghost type="primary"  @click="f1 =!f1">不带遮罩</s-button>
	<s-dialog
		v-model="f1"
		title="header"
		:show-foot="true"
		:show-mark="false"
	>

	</s-dialog>

</template>

<script setup lang="ts">

import {ref} from "vue";


const f1 = ref<Boolean>(false);





</script>



