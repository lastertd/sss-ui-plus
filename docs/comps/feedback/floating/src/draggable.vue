<template>
	<s-floating trigger="hover" :close-delay="300" >
		<template #reference>
			<div
				ref="reference"
				style="display: inline-block; border: solid 1px gray;border-radius: 5px;line-height: 50px;padding: 0 20px"
			>试试拖拽我吧
			</div>

		</template>
		未开启快速跟踪
	</s-floating>

	<s-floating trigger="hover" :close-delay="300" quick-track>
		<template #reference>
			<div
				ref="reference2"
				style="display: inline-block; border: solid 1px gray;border-radius: 5px;line-height: 50px;padding: 0 20px"
			>试试拖拽我吧
			</div>

		</template>
		开启了快速跟踪
	</s-floating>
</template>

<script setup lang="ts">

import {computed, ref} from "vue";
import {useDraggable} from "@sss-ui-plus/hooks"

const reference = ref();
const reference2 = ref();

const f = computed(() => {
	return true;
})

useDraggable(reference, reference, f);
useDraggable(reference2, reference2, f);

</script>

