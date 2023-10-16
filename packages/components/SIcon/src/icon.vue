<template>
	<component
		ref="icon"
		v-if="props.target"
		:class="kls"
		:style="sdl"
		:is="props.tag"
		:for="props.for"
		v-bind="$attrs"
	></component>


</template>

<script setup lang="ts">
import {SIconProps} from "./icon";
import {computed, ref} from "vue";
import {useNS} from "@sss-ui-plus/hooks/useNS";

defineOptions({
	name: "s-icon",
	inheritAttrs: false,
})
const ns = useNS('icon');
const props = defineProps({...SIconProps});
const icon = ref<HTMLElement | null>(null);
const kls = computed(() => {
	return [
		ns.namespace,
		ns.is(props.rotating, 'rotating'),
		"iconfont",
		`sss-${props.target}`
	]
})

const sdl = computed(() => {
	return{
		[ns.cssVar('color')]:props.color ? `${props.color}` : 'inherit',
	}
})





</script>


