<script setup lang="ts">
import "./row.less"
import {SRowProps} from "./row.ts";
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
		class="sss-row"
		:style="styles"
		v-bind="$attrs"

	>
		<slot></slot>
	</div>
</template>

