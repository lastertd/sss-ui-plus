<template>
	<div
		:class="ns.namespace"
		:style="sdl"

	>
		<slot></slot>
	</div>
</template>
<script setup lang="ts">
import {SRowProps} from "./flex";
import {computed} from "vue";
import {useNS} from "@sss-ui-plus/hooks";
import {px} from "@sss-ui-plus/utils";


defineOptions({
	name: 's-flex',
	inheritAttrs: true
})
const ns = useNS('flex');
const props = defineProps({...SRowProps});


const sdl = computed(() => {
	return {
		[ns.cssVar('gap')]:px(props.gap),
		[ns.cssVar('justify')]:props.justifyContent,
		[ns.cssVar('align')]:props.alignItem,
		[ns.cssVar('wrap')]:props.wrap ? 'wrap' : 'nowrap',
	};
})


</script>



