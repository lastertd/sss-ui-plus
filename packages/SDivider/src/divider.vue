<template>
	<div
		class="sss-divider"
		:class="[
			`sss-divider-${props.type}`,
			`sss-divider-${props.direction}`
		]"
	>
		<span class="sss-divider-content" ref="content">
			<s-icon :target="props.prefixIcon" style="padding: 0;"></s-icon>
			{{ props.content }}
			<s-icon :target="props.suffixIcon" style="padding: 0"></s-icon>
		</span>
	</div>
</template>


<script setup lang="ts">

import "./divider.less"
import {SDividerProps} from "./divider";
import {onMounted, ref} from "vue";

const props = defineProps({...SDividerProps});

const content = ref<Element | undefined>(undefined);

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
	}
})

</script>

