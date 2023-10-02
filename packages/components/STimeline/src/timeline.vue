<template>
	<ul :class="TimelineKls">
		<slot/>
	</ul>
</template>
<script setup lang="ts">

import {STimelineProps} from "./timeline";
import {computed} from "vue";
import {useNS} from "@sss-ui-plus/hooks";

defineOptions({
	name: "STimeline",
	inheritAttrs: true
})

const props = defineProps({...STimelineProps});
const timelineNS = useNS('timeline');

const TimelineKls = computed(() => {

	return [
		timelineNS.namespace,
		timelineNS.m(props.direction),
		timelineNS.m(props.size)
	]
})


</script>



