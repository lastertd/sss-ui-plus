<script setup lang="ts">
import {SDividerProps} from "./divider";
import {onMounted, ref, useSlots} from "vue";
import {unrefElement, MaybeElement} from "@vueuse/core";


defineOptions({
	name: 'SDivider',
	inheritAttrs: true
})

const props = defineProps({...SDividerProps});
const content = ref<Element | undefined>(undefined);
const divider = ref<MaybeElement>(undefined);
const slots = useSlots();

onMounted(() => {
	const el = content.value as HTMLElement;


	if (props.direction === 'horizontal') {
		if (props.contentPosition === 'start') {
			el.style.left = '15px';
		} else if (props.contentPosition === 'center') {
			el.style.left = '50%';
			el.style.transform = 'translate(-50%,-50%)';
		}
		if (props.contentPosition === 'end') {
			el.style.right = '15px';
		} else {
			el.style.left = props.contentPosition;
		}

		if (props.gap !== undefined) {
			unrefElement(divider)!.style.margin = `${props.gap}px 0`
		}

	} else if (props.direction === 'vertical') {
		if (props.contentPosition === 'start') {
			el.style.top = '15px';
		} else if (props.contentPosition === 'center') {
			el.style.top = '50%';
			el.style.transform = 'translate(-50%,-50%)';
		}
		if (props.contentPosition === 'end') {
			el.style.bottom = '15px';
		} else {
			el.style.top = props.contentPosition;
		}

		if (props.gap !== undefined) {
			unrefElement(divider)!.style.margin = `0 ${props.gap}px`
		}
	}
})

</script>

<template>
	<div
		ref="divider"
		class="s-divider"
		:class="[
			`s-divider--${props.type}`,
			`s-divider--${props.direction}`
		]"
	>
		<span class="s-divider__content" ref="content">
			<s-icon :target="props.prefixIcon" no-padding></s-icon>
			<template v-if="slots.default">
				<slot></slot>
			</template>
			<template v-else>{{ props.content }}</template>
			<s-icon :target="props.suffixIcon" no-padding></s-icon>
		</span>
	</div>
</template>
