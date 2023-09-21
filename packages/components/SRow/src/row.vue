<script setup lang="ts">
import {SRowProps} from "./row";
import {computed} from "vue";


defineOptions({
	name: 'SRow',
	inheritAttrs: false
})

const props = defineProps({...SRowProps});

const styles = computed(() => {
	return {
		gap: `${props.gap}px`,
		justifyContent: `${props.horizontal}`,
		alignItems: `${props.vertical}`,
		flexFlow: props.wrappable ? 'wrap' : 'nowrap',

	}
})


</script>

<template>
	<div
		class="s-row"
		:style="styles"
		v-bind="$attrs"

	>
		<slot></slot>
	</div>
</template>

