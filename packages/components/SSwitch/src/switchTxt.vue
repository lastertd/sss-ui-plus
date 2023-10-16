<template>

	<span ref="txt">
		{{ props.txt }}
	</span>

</template>

<script setup lang="ts">

import {watch,ref} from "vue";
import {unrefElement} from "@vueuse/core";

const props = defineProps({
	active: Boolean,
	txt: String,

})

const txt = ref<HTMLElement | null>(null);

const leftKeyframes: Keyframe[] = [
	{
		opacity: '0',
		transform: 'translateX(15px)',

	},
	{
		opacity: '1',
		transform: 'translateX(0)',
	}
]
const rightKeyframes: Keyframe[] = [
	{
		opacity: '0',
		transform: 'translateX(-15px)',

	},
	{
		opacity: '1',
		transform: 'translateX(0)',
	}
]

watch(() => props.active, (active) => {
	const el = unrefElement(txt);
	if (!el) return;
	if (active) {
		el.animate(leftKeyframes, {
			duration: 200,
			fill: 'forwards',
			easing: 'linear'

		})
	} else {
		el.animate(rightKeyframes, {
			duration: 200,
			fill: 'forwards',
			easing: 'linear'
		})

	}
}, {immediate: false});


</script>


