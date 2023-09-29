<template>
	<component
		ref="icon"
		v-if="props.target"
		:class="iconKls"
		:style="iconSdl"
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
	name: "SIcon",
	inheritAttrs: false,
})


const props = defineProps({...SIconProps});
const icon = ref<HTMLElement | null>(null);
const iconNS = useNS('icon');

const iconKls = computed(() => {
	return [
		iconNS.namespace,
		iconNS.is(props.rotating, 'rotating'),
		"iconfont",
		`sss-${props.target}`
	]
})
const iconSdl = computed(() => {
	return{
		'--sss-icon-color': props.color ? `${props.color}` : 'inherit',

	}
})





</script>


