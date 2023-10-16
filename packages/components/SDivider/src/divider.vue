<template>
	<div
		ref="divider"
		:class="kls"
		:style="sdl"
	>
		<span :class="ns.e('content')" ref="content">
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
import {computed, ref, useSlots} from "vue";
import {MaybeElement} from "@vueuse/core";
import {useNS} from "@sss-ui-plus/hooks";
import {px} from "@sss-ui-plus/utils";


defineOptions({
	name: 's-divider',
	inheritAttrs: true
})
const ns = useNS('divider');
const props = defineProps({...SDividerProps});
const slots = useSlots();
const kls = computed(() => {
	return [
		ns.namespace,
		ns.m(props.status),
		ns.m(props.direction),
		ns.m(props.placement)
	]

})
const sdl = computed(() => {
	return {
		[ns.cssVar('gap')]: px(props.gap, 15),
		[ns.cssVar('placement')]: props.placement,
	}
})

const content = ref<HTMLElement | undefined>(undefined);
const divider = ref<MaybeElement>(undefined);


</script>


