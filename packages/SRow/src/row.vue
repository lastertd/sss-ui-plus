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
import {SRowProps} from "./row.ts";

defineOptions({
	name:'SRow',
})

const props = defineProps({...SRowProps});

const styles = computed(() => {
	return {
		gap: `${props.gap}px`
	}
})


</script>



