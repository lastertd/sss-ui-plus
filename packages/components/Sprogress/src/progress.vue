<template>
	<div class="s-progress" ref="progress" :class="ProgressKls" :style="ProgressSdl">
		<div class="s-progress__bar">
			<div class="s-progress__thumb" :style="thumbSdl">
				<span class="s-progress__text s-progress__text--inside"
				      v-if="props.textStatus === 'inside'"
				>{{ props.percentage }}%</span>
			</div>
		</div>
		<span class="s-progress__text s-progress__text--outside"
		      v-if="props.textStatus === 'outside'"
		>{{ props.percentage }}%</span>
		<s-icon class="s-progress__icon" :target="icon"></s-icon>
	</div>
</template>

<script setup lang="ts">

import {SProgressProps} from "./progress";
import {computed, ref} from "vue";

defineOptions({
	name: "SProgress",
	inheritAttrs: true,
})

const props = defineProps({...SProgressProps});
const progress = ref<HTMLElement | null>(null);


const ProgressKls = computed(() => {
	const type = props.type ? `s-progress--${props.type}` : '';
	const theme = props.theme ? `s-progress--${props.theme}` : '';

	return [
		type,
		theme,
	]

})

const ProgressSdl = computed(() => {
	const variable = {
		'--sss-progress-thumb-color': 'var(--sss-color-cyan)'

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

const thumbSdl = computed(() => {
	const width = props.percentage


	return {
		width: `${width}%`
	}
})
const icon = computed(() => {
	return props.type ?? '';
})

</script>

