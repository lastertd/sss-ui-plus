<template>
	<div ref="progress" :class="kls" :style="sdl">
		<div :class="ns.e('bar')">
			<div :class="ns.e('thumb')">
				<span :class="[ns.e('text'), ns.em('text', 'inside')]"
				      v-if="props.textStatus === 'inside'"
				>{{ props.percentage }}%</span>
			</div>
		</div>
		<span :class="[ns.e('text'), ns.em('text', 'outside')]"
		      v-if="props.textStatus === 'outside'"
		>{{ props.percentage }}%</span>
		<s-icon :class="ns.e('icon')" :target="props.icon??props.type"></s-icon>
	</div>
</template>

<script setup lang="ts">

import {SProgressProps} from "./progress";
import {computed, ref} from "vue";
import {useNS} from "@sss-ui-plus/hooks";
import {getClrVar, isArray, isFunction} from "@sss-ui-plus/utils";

defineOptions({
	name: "s-progress",
	inheritAttrs: true,
})
const ns = useNS('progress');
const props = defineProps({...SProgressProps});
const progress = ref<HTMLElement | null>(null);
const kls = computed(() => {
	return [
		ns.namespace,
		ns.m(props.type),
		ns.m(props.variant)
	]

})
const sdl = computed(() => {
	const variable = {
		[ns.cssVar('color')]: getClrVar('cyan'),
		[ns.cssVar('thumb-width')]: '0%'
	}

	if (props.percentage) {
		variable[ns.cssVar('thumb-width')] = `${props.percentage}%`
	}
	if (props.type){
		variable[ns.cssVar('color')] = getClrVar(props.type);
	}

	if (props.color) {
		if (isArray(props.color)) {
			const index = Math.floor(props.percentage / 100 * props.color.length);

			variable[ns.cssVar('color')] = props.color[Math.min(index, props.color.length - 1)];

		} else if (isFunction(props.color)) {
			variable[ns.cssVar('color')] = props.color(props.percentage);

		} else {
			variable[ns.cssVar('color')] = props.color;

		}

	}

	return variable;
})


</script>

