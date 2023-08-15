<template>
	<div
		ref="divider"
		class="sss-divider"
		:class="[
			`sss-divider-${props.type}`,
			`sss-divider-${props.direction}`
		]"
	>
		<span class="sss-divider-content" ref="content">
			<s-icon :target="props.prefixIcon" style="padding: 0;"></s-icon>
			<template v-if="slots.default">
				<slot></slot>
			</template>
			<template v-else>{{ props.content }}</template>
			<s-icon :target="props.suffixIcon" style="padding: 0"></s-icon>
		</span>
	</div>
</template>


<script setup lang="ts">

import "./divider.less"
import {SDividerProps} from "./divider";
import {onMounted, ref, useSlots} from "vue";
import {MaybeHTMLElement} from "../../../src/types";
import {unrefElement} from "@vueuse/core";

const props = defineProps({...SDividerProps});

const content = ref<Element | undefined>(undefined);
const divider = ref<MaybeHTMLElement>(undefined);
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

