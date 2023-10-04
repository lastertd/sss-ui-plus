<template>
	<li :class="TimelineItemKls" :style="TimelineItemSdl">


		<div :class="itemNS.e('timeline')">
			<div :class="itemNS.e('circle')">
				<s-icon :class="itemNS.e('icon')" :target="props.icon || props.type"></s-icon>
			</div>

			<div :class="itemNS.e('line')"></div>

		</div>

		<div :class="itemNS.e('content')">
			<div v-if="props.placement === 'start'"
			     :class="[itemNS.e('time'),itemNS.em('time', 'start')]"
			>{{ props.time }}
			</div>
			<slot name="default"/>
			<div v-if="props.placement === 'end'"
			     :class="[itemNS.e('time'),itemNS.em('time', 'end')]"
			>{{ props.time }}
			</div>
		</div>

	</li>

</template>
<script setup lang="ts">

import {STimelineItemProps} from "./timelineItem";
import {computed} from "vue";
import {useNS} from "@sss-ui-plus/hooks";
import {getClrVar} from "@sss-ui-plus/utils";

defineOptions({
	name: "STimelineItem",
	inheritAttrs: true
})

const props = defineProps({...STimelineItemProps})
const itemNS = useNS('timeline-item');

const TimelineItemKls = computed(() => {
	return [
		itemNS.namespace,
		itemNS.m(props.type),
		itemNS.m(props.variant)
	]
})

const TimelineItemSdl = computed(() => {
	return {
		'--sss-timeline-item-color': props.color || getClrVar(props.type) || getClrVar('gray', 'dark'),
		'--sss-timeline-item-bg-color': props.color || getClrVar(props.type) || getClrVar('gray'),
		'--sss-timeline-item-br-color': props.color || getClrVar(props.type) || getClrVar('gray'),

	}
})

</script>


