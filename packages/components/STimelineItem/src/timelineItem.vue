<template>
	<li :class="TimelineItemKls">


		<div :class="itemNS.e('timeline')">
			<div :class="itemNS.e('circle')">
				<s-icon :class="itemNS.e('icon')" :target="props.icon"></s-icon>
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

</script>


