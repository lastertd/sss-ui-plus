<template>
	<s-row horizontal="flex-start" :gap="30">
		<div
			ref="reference"
			style="height: 50px;border: solid 1px gray;border-radius: 5px;line-height: 50px;padding: 0 20px"
		>试试拖拽我吧</div>
	</s-row>


	<s-floating :reference="reference" trigger="hover" :close-delay="300" quick-track>
		死皮赖脸粘着你👻
	</s-floating>
</template>

<script setup lang="ts">

import {computed, ref} from "vue";
import {useDraggable} from "sss-ui-plus/es/src/hooks/useDraggable";

const reference = ref();

const f = computed(() => {
	return true;
})

useDraggable(reference, reference, f);

</script>

