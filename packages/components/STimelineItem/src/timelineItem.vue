<template>
	<li :class="kls" :style="TimelineItemSdl">


		<div :class="ns.e('timeline')">
			<div :class="ns.e('circle')">
				<s-icon :class="ns.e('icon')" :target="props.icon || props.type"></s-icon>
			</div>

			<div :class="ns.e('line')"></div>

		</div>

		<div :class="ns.e('content')">
			<div v-if="props.placement === 'start'"
			     :class="[ns.e('time'),ns.em('time', 'start')]"
			>{{ props.time }}
			</div>
			<slot name="default"/>
			<div v-if="props.placement === 'end'"
			     :class="[ns.e('time'),ns.em('time', 'end')]"
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
	name: "s-timeline-item",
	inheritAttrs: true
})
const ns = useNS('timeline-item');
const props = defineProps({...STimelineItemProps})
const kls = computed(() => {
	return [
		ns.namespace,
		ns.m(props.type),
		ns.m(props.variant)
	]
})

const TimelineItemSdl = computed(() => {
	return {
		[ns.cssVar('color')]: props.color || getClrVar(props.type) || getClrVar('gray', 'dark'),
		[ns.cssVar('bg-color')]: props.color || getClrVar(props.type) || getClrVar('gray'),
		[ns.cssVar('br-color')]: props.color || getClrVar(props.type) || getClrVar('gray'),

	}
})

</script>


