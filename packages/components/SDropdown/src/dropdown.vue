<template>
	<s-floating
		ref="floating"
		v-bind="useAttrs('scopedOnly').value"
		:class="ns.namespace"
		:style="sdl"
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


		@open="emits('open')"
		@opened="emits('opened')"
		@close="emits('close')"
		@closed="emits('closed')"


	>
		<template #reference v-if="slots.reference">
			<slot name="reference"></slot>
		</template>

		<template #default>
			<s-scrollbar
				v-bind="useAttrs('scoped').value"
				:class="ns.e('wrapper')"
				:no-resize="props.scrollbarNoResize"
				:is-outside="props.scrollbarIsOutside"
			>
				<ul :class="ns.e('inner')">
					<slot></slot>
				</ul>
			</s-scrollbar>
		</template>


	</s-floating>

</template>

<script setup lang="ts">
import {SDropdownEmits, SDropdownProps} from "./dropdown";
import {SFloating, SFloatingInstance} from "../../SFloating";
import {SScrollbar} from "../../SScrollbar";
import {computed, provide, ref, useSlots} from "vue";
import {useAttrs, useNS} from "@sss-ui-plus/hooks";
import {getClrVar} from "@sss-ui-plus/utils";


defineOptions({
	name: 's-dropdown',
	inheritAttrs: false
})
const ns = useNS('dropdown');
const props = defineProps({...SDropdownProps});
const emits = defineEmits({...SDropdownEmits});
const slots = useSlots();
const sdl = computed(() => {
	return {
		[ns.cssVar('active-color')]: props.activeColor ?? getClrVar('primary'),
		[ns.cssVar('justify')]: props.center ? 'center' : 'start',

	}
})

const floating = ref<SFloatingInstance | null>(null);


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
	/**
	 * @description 关闭下拉框
	 */
	close,
	/**
	 * @description 打开下拉框
	 */
	open,
	/**
	 * @description 打开/关闭下拉框轮循
	 */
	toggle,
})

</script>



