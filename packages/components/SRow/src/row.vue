<template>
	<component
		:is="props.tag"
		:class="ns.namespace"
		:style="sdl"
		v-bind="$attrs"

	>
		<slot></slot>
	</component>
</template>
<script setup lang="ts">
import {SRowProps} from "./row";
import {computed} from "vue";
import {useNS} from "@sss-ui-plus/hooks";
import {px} from "@sss-ui-plus/utils";


defineOptions({
	name: 's-row',
	inheritAttrs: false
})
const ns = useNS('row');
const props = defineProps({...SRowProps});


const sdl = computed(() => {
	return {
		[ns.cssVar('gutter')]: px(props.gutter),
		[ns.cssVar('justify')]: props.justify,
		[ns.cssVar('align')]: props.align,
	};
})


</script>



