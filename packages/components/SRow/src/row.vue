<template>
	<div
		:class="rowNS.namespace"
		:style="styles"
		v-bind="$attrs"

	>
		<slot></slot>
	</div>
</template>
<script setup lang="ts">
import {SRowProps} from "./row";
import {computed} from "vue";
import {useNS} from "@sss-ui-plus/hooks";


defineOptions({
	name: 'SRow',
	inheritAttrs: false
})

const props = defineProps({...SRowProps});
const rowNS = useNS('row');


const styles = computed(() => {
	return {
		'--sss-row-gap': props.gap ? `${props.gap}px` : '0',
		'--sss-row-justify-content': props.justifyContent,
		'--sss-row-align-item': props.alignItem,
		'--sss-row-wrap': props.wrap ? 'wrap' : 'nowrap',

	};
})


</script>



