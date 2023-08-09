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

		@open="emits('open')"
		@opened="emits('opened')"
		@close="emits('close')"
		@closed="emits('closed')"

		class="sss-tooltip"

	>
		<template #reference>
			<slot name="reference"></slot>
		</template>

		<template #default>
			<slot></slot>
		</template>
	</s-floating>
</template>

<script setup lang="ts">
import "./tooltip.less"
import {STooltipEmits, STooltipProps} from "./tooltip";
import SFloating from "../../SFloating";

const props = defineProps({...STooltipProps});
const emits = defineEmits({...STooltipEmits})


</script>
