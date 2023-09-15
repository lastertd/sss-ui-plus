<script setup lang="ts">
import "./dropdown.less"
import {SDropdownEmits, SDropdownProps} from "./dropdown.ts"
import { SFloating, SScrollbar} from "@sss-ui-plus/components";
import {provide, ref, useSlots} from "vue";


defineOptions({
	name: 'SDropdown',
	inheritAttrs: false
})


const props = defineProps({...SDropdownProps});
const emits = defineEmits({...SDropdownEmits});
const slots = useSlots();

const floating = ref<InstanceType<typeof SFloating> | undefined>(undefined);


const open = () => floating.value!.open();
const close = () => floating.value!.close();
const toggle = () => floating.value!.toggle();


provide('inDropdown', true);
provide('isCenter', props.center);
provide('DropdownItemClick', (val: string) => {
	emits("select", val, props.prefix);

});
provide('DropdownClose', () => {
	if (props.closeOnClickItem) {
		close();
	}
})


defineExpose({
	close,
	open,
	toggle,
})

</script>

<template>
	<s-floating
		ref="floating"
		class="sss-dropdown"
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
		v-bind="$attrs"


		@open="emits('open')"
		@opened="emits('opened')"
		@close="emits('close')"
		@closed="emits('closed')"

		style="padding: 7px 0"

	>
		<template #reference v-if="slots.reference">
			<slot name="reference"></slot>
		</template>


		<s-scrollbar
			:vertical="props.scrollbarVertical"
			:horizontal="props.scrollbarHorizontal"
			:no-resize="props.scrollbarNoResize"
			:always="props.scrollbarAlways"
			:is-outside="props.scrollbarIsOutside"
			:quick-jump="props.scrollbarQuickJump"



		>
			<slot></slot>
		</s-scrollbar>

	</s-floating>

</template>


