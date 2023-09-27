<template>
	<ul class="s-timeline" :class="TimelineKls">
		<slot/>
	</ul>
</template>
<script setup lang="ts">

import {STimelineProps} from "./timeline";
import {computed} from "vue";

defineOptions({
	name: "STimeline",
	inheritAttrs: true
})

const props = defineProps({...STimelineProps});

const TimelineKls = computed(() => {
	const direction = props.direction ? `s-timeline--${props.direction}` : '';
	const size = props.size ? `s-timeline--${props.size}` : '';

	return [
		direction,
		size,
	]
})


</script>



