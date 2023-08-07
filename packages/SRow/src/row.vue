<template>
	<div
		class="sss-row"
		:style="styles"

	>
		<slot></slot>
	</div>
</template>

<script setup lang="ts">
import "./row.less"
import {computed} from "vue";
import {SRowProps} from "./row";

defineOptions({
	name:'SRow',
})

const props = defineProps({...SRowProps});

const styles = computed(() => {
	return {
		gap: `${props.gap}px`,
		justifyContent: `${props.horizontal}`,
		alignItems: `${props.vertical}`,
		flexFlow: props.wrappable ? 'wrap':'nowrap',

	}
})


</script>



