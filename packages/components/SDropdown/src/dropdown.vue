<template>
	<s-floating
		ref="floating"
		:class="dropdownNS.namespace"
		:style="dropdownSdl"
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
				:no-resize="props.scrollbarNoResize"
				:is-outside="props.scrollbarIsOutside"
				v-bind="$attrs"


			>
				<ul :class="dropdownNS.e('inner')">
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
import {useNS} from "@sss-ui-plus/hooks";


defineOptions({
	name: 'SDropdown',
	inheritAttrs: false
})


const props = defineProps({...SDropdownProps});
const emits = defineEmits({...SDropdownEmits});
const slots = useSlots();
const dropdownNS = useNS('dropdown');

const dropdownSdl = computed(() => {
	return {
		'--sss-dropdown-active-color':props.activeColor?? 'var(--sss-color-primary)',
		'--sss-dropdown-play':props.center? 'center' :'start',

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



