<template>
	<div
		ref="divider"
		:class="dividerKls"
		:style="dividerSdl"
	>
		<span :class="dividerNS.e('content')" ref="content">
			<s-icon :target="props.prefixIcon"></s-icon>
			<template v-if="slots.default">
				<slot></slot>
			</template>
			<template v-else>{{ props.text }}</template>
			<s-icon :target="props.suffixIcon"></s-icon>
		</span>
	</div>
</template>

<script setup lang="ts">
import {SDividerProps} from "./divider";
import {computed, onMounted, ref, useSlots} from "vue";
import {unrefElement, MaybeElement} from "@vueuse/core";
import {useNS} from "@sss-ui-plus/hooks/useNS";


defineOptions({
	name: 'SDivider',
	inheritAttrs: true
})

const props = defineProps({...SDividerProps});
const content = ref<HTMLElement | undefined>(undefined);
const divider = ref<MaybeElement>(undefined);
const slots = useSlots();
const dividerNS = useNS('divider');


const dividerKls = computed(() => {
	return [
		dividerNS.namespace,
		dividerNS.m(props.status),
		dividerNS.m(props.direction),
		dividerNS.m(props.placement)

	]

})

const dividerSdl = computed(() => {
	return {
		'--sss-divider-gap': props.gap ? `${props.gap}px` : '15px',
		'--sss-divider-placement': props.placement,

	}
})


</script>


