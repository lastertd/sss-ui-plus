<template>

	<s-row justify-content="flex-start" :gap="20">
		<s-floating trigger="hover" :close-delay="300">
			<template #reference>
				<div
					ref="reference"
					class="reference"
				>
					drag me
				</div>

			</template>
			未开启快速跟踪
		</s-floating>

		<s-floating trigger="hover" :close-delay="300" quick-track>
			<template #reference>
				<div
					ref="reference2"
					class="reference"
				>
					drag me
				</div>

			</template>
			开启了快速跟踪
		</s-floating>
	</s-row>

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
<style scoped>
.reference{
	border-radius: 5px;
	border: solid 1px #989494;
	line-height: 32px;
	padding: 0 15px;
	user-select: none;

}
</style>

