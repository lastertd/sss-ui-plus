<template>
	<s-button ghost type="primary"  @click="f1 =!f1">top=10vh</s-button>
	<s-button ghost type="primary" @click="f2 = !f2">top=unset</s-button>
	<s-dialog
		v-model="f1"
		title="header"
		:show-foot="true"
		top="10vh"
	>
	</s-dialog>
	<s-dialog
		v-model="f2"
		title="header"
		:show-foot="true"
		top="unset"
	>

	</s-dialog>
</template>

<script setup lang="ts">

import {ref} from "vue";


const f1 = ref<Boolean>(false);
const f2 = ref<Boolean>(false);





</script>



