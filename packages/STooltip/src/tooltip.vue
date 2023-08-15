<template>
	<s-floating
		:trigger="props.trigger"
		:placement="props.placement"
		:transition="props.transition"
		:open-delay="props.openDelay"
		:close-delay="props.closeDelay"
		:disabled="props.disabled"
		:offset="props.offset"
		:theme="props.theme"
		:close-on-click-body="props.closeOnClickBody"
		:open-on-mounted="props.openOnMounted"
		:teleported="props.teleported"
		:show-arrow="props.showArrow"
		:expression="props.expression"
		:floating-class="props.floatingClass"
		:reference="props.reference"
		:quick-track="props.quickTrack"

		@open="emits('open')"
		@opened="emits('opened')"
		@close="emits('close')"
		@closed="emits('closed')"

		class="sss-tooltip"

	>

		<template #reference v-if="slots.default" >
			<slot></slot>
		</template>

		<template #default>
			<template v-if="slots.content">
				<slot name="content"></slot>
			</template>
			<template v-else>
				{{props.content}}
			</template>
		</template>
	</s-floating>
</template>

<script setup lang="ts">
import "./tooltip.less"
import {STooltipEmits, STooltipProps} from "./tooltip";
import SFloating from "../../SFloating";
import {useSlots} from "vue";

const props = defineProps({...STooltipProps});
const emits = defineEmits({...STooltipEmits})
const slots = useSlots();


</script>
