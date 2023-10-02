<template>
	<div ref="progress" :class="ProgressKls" :style="ProgressSdl">
		<div :class="progressNS.e('bar')">
			<div :class="progressNS.e('thumb')">
				<span :class="[progressNS.e('text'), progressNS.em('text', 'inside')]"
				      v-if="props.textStatus === 'inside'"
				>{{ props.percentage }}%</span>
			</div>
		</div>
		<span :class="[progressNS.e('text'), progressNS.em('text', 'outside')]"
		      v-if="props.textStatus === 'outside'"
		>{{ props.percentage }}%</span>
		<s-icon :class="progressNS.e('icon')" :target="props.icon??props.type"></s-icon>
	</div>
</template>

<script setup lang="ts">

import {SProgressProps} from "./progress";
import {computed, ref} from "vue";
import {useNS} from "@sss-ui-plus/hooks";

defineOptions({
	name: "SProgress",
	inheritAttrs: true,
})

const props = defineProps({...SProgressProps});
const progress = ref<HTMLElement | null>(null);
const progressNS = useNS('progress');


const ProgressKls = computed(() => {
	return [
		progressNS.namespace,
		progressNS.m(props.type),
		progressNS.m(props.variant)
	]

})

const ProgressSdl = computed(() => {
	const variable = {
		'--sss-progress-thumb-color': 'var(--sss-color-cyan)',
		'--sss-progress-thumb-width': '10%'
	}

	if (props.percentage) {
		variable["--sss-progress-thumb-width"] = `${props.percentage}%`
	}

	switch (props.type) {
		case 'success':
			variable["--sss-progress-thumb-color"] = 'var(--sss-color-success)';
			break;
		case 'info':
			variable["--sss-progress-thumb-color"] = 'var(--sss-color-info)';
			break;
		case 'warning':
			variable["--sss-progress-thumb-color"] = 'var(--sss-color-warning)';
			break;
		case 'danger':
			variable["--sss-progress-thumb-color"] = 'var(--sss-color-danger)';
			break;
	}

	if (props.color) {
		if (typeof props.color === 'function') {
			variable["--sss-progress-thumb-color"] = props.color(props.percentage);
		} else {
			variable["--sss-progress-thumb-color"] = props.color;
		}
	}

	return variable;
})



</script>

