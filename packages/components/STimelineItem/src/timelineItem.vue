<template>
	<li class="s-timelineItem" :class="TimelineItemKls">
		<div class="s-timeline__timeline">
			<div class="s-timelineItem__circle">
				<s-icon class="s-timelineItem__icon" :target="props.icon"></s-icon>
			</div>

			<div class="s-timelineItem__line"></div>

		</div>

		<div class="s-timelineItem__content">
			<div class="s-timelineItem__time s-timelineItem__time--start"
			     v-if="props.placement === 'start'"
			>{{ props.time }}
			</div>
			<slot name="default"/>
			<div class="s-timelineItem__time s-timelineItem__time--end"
			     v-if="props.placement === 'end'"
			>{{ props.time }}
			</div>
		</div>

	</li>

</template>
<script setup lang="ts">

import {STimelineItemProps} from "./timelineItem";
import {computed} from "vue";

defineOptions({
	name: "STimelineItem",
	inheritAttrs: true
})

const props = defineProps({...STimelineItemProps})

const TimelineItemKls = computed(() => {
	const type = props.type?`s-timelineItem--${props.type}`:'';
	const theme = props.theme?`s-timelineItem--${props.theme}`:'';

	return [
		type,
		theme
	]
})

</script>


