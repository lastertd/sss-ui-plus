
<script setup lang="ts">
import "./cascader.less"
import {CascaderOptionsType, SCascaderEmits, SCascaderProps} from "./cascader.ts";
import {nextTick, ref, useSlots} from "vue";
import SDropdown from "../../SDropdown/src/dropdown.vue";
import SDropDownItem from "../../SDropDownItem/src/dropdownItem.vue";
import SCascader from "../index.ts";


defineOptions({
	name:"SCascader",
	inheritAttrs:false
})

const props = defineProps({...SCascaderProps});
const emits = defineEmits({...SCascaderEmits});
const slots = useSlots();

const dropdown = ref<InstanceType<typeof SDropdown> | undefined>(undefined);
const subCascader = ref<InstanceType<typeof SCascader> | undefined>(undefined);

const subCascaderOptions = ref<CascaderOptionsType[]>([]);

const open = () => dropdown.value!.open();
const close = () => dropdown.value!.close();
const toggle = () => dropdown.value!.toggle();


const handleReferenceClick = (options?: CascaderOptionsType[]) => {
	// console.log("options",options)
	subCascaderOptions.value = options;
	nextTick().then(() => {


		subCascader.value!.open();


	})
}
const handleItemClick = () => {
	// emits('close');
	close();
}




defineExpose({
	close,
	open,
	toggle,
})

</script>

<template>
	<s-dropdown
		ref="dropdown"
		:class="`sss-cascader-${props.subCascaderPlacement}`"
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


		:scrollbar-vertical="props.scrollbarVertical"
		:scrollbar-horizontal="props.scrollbarHorizontal"
		:scrollbar-no-resize="props.scrollbarNoResize"
		:scrollbar-always="props.scrollbarAlways"
		:scrollbar-is-outside="props.scrollbarIsOutside"
		:scrollbar-quick-jump="props.scrollbarQuickJump"

		:center="props.center"
		:close-on-click-item="props.closeOnClickItem"
		:prefix="props.prefix"


		@open="emits('open')"
		@opened="emits('opened')"
		@close="emits('close')"
		@closed="emits('closed')"


	>
		<template #reference v-if="slots.default">
			<slot></slot>
		</template>

		<template #default>
			<s-cascader
				ref="subCascader"
				floating-class="sss-sub-cascader"
				trigger="unset"
				:options="subCascaderOptions"
				:teleported="false"
				:placement="props.subCascaderPlacement"
				:offset="0"

				style="height: 100%"
			>
				<template v-for="item in props.options">
					<s-drop-down-item
						v-if="!item.children"
						:label="item.label"
						:value="item.value"
						@click="handleItemClick"
					></s-drop-down-item>
					<s-drop-down-item
						v-else
						:label="`${item.label} >`"
						:value="item.value"
						@click="handleReferenceClick(item.children)"
					></s-drop-down-item>
				</template>
			</s-cascader>


		</template>

	</s-dropdown>

</template>


