<script setup lang="ts">
import {STooltipEmits, STooltipProps} from "./tooltip";
import {SFloating, SFloatingInstance} from "../../SFloating";
import {ref, useSlots} from "vue";


defineOptions({
	name: "STooltip",
	inheritAttrs: false
})

const props = defineProps({...STooltipProps});
const emits = defineEmits({...STooltipEmits})
const slots = useSlots();
const floating = ref<SFloatingInstance | null>(null);


defineExpose({
	close:() => floating.value!.close(),
	open:() => floating.value!.open(),
	toggle:() => floating.value!.toggle()
})


</script>
<template>
	<s-floating
		ref="floating"
		:trigger="props.trigger"
		:placement="props.placement"
		:transition="props.transition"
		:open-delay="props.openDelay"
		:close-delay="props.closeDelay"
		:disabled="props.disabled"
		:offset="props.offset"
		:close-on-click-body="props.closeOnClickBody"
		:open-on-mounted="props.openOnMounted"
		:teleported="props.teleported"
		:show-arrow="props.showArrow"
		:floating-class="props.floatingClass"
		:reference="props.reference"
		:quick-track="props.quickTrack"
		v-bind="$attrs"

		@open="emits('open')"
		@opened="emits('opened')"
		@close="emits('close')"
		@closed="emits('closed')"

		class="s-tooltip"
		:class="`s-tooltip--${props.theme}`"

	>

		<template #reference v-if="slots.default">
			<slot></slot>
		</template>

		<template #default>
			<template v-if="slots.content">
				<slot name="content"></slot>
			</template>
			<template v-else>
				{{ props.content }}
			</template>
		</template>
	</s-floating>
</template>
