<script setup lang="ts">
import "./skeleton.less"
import {SSkeletonProps} from "./skeleton.ts";
import {provide, ref, watch} from "vue";

defineOptions({
	name: 'SSkeleton',
	inheritAttrs: false
})


const props = defineProps({...SSkeletonProps});

provide('hasSkeletonAnimation', props.animated)
provide('isWithinSkeleton', true)


let timer: NodeJS.Timeout;

const _loading = ref<Boolean>(props.loading);

watch(() => props.loading, () => {
	clearTimeout(timer);

	if (props.loading) {
		_loading.value = true;
	} else {
		timer = setTimeout(() => {
			_loading.value = false;
		}, props.throttle);
	}
})

</script>

<template>
	<template v-if="_loading">
		<slot name="skeleton"></slot>
	</template>

	<template v-else>
		<slot></slot>
	</template>
</template>
